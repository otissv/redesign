const swc = require('@swc/core')
const pkg = require('../package.json')

const {
  errorHandler,
  getPathsInfo,
  readFile,
  exec,
  writeFile,
} = require('./utils')

async function build(paths) {
  try {
    return await createPackageJson(paths)
      .then(createDefinitions)
      .then(buildSource)

    return paths
  } catch (error) {
    errorHandler(error)
  }
}
exports.build = build

async function buildSource(paths) {
  try {
    try {
      await exec('npm run build')
    } catch (error) {
      errorHandler(error)
    }

    return paths
  } catch (error) {
    errorHandler(error)
  }
}

async function createPackageJson(paths) {
  try {
    const npmPkg = {
      name: pkg.name,
      version: pkg.version,
      license: pkg.license,
      main: pkg.main,
      typings: pkg.typings,
      author: pkg.author,
      module: pkg.module,
      "publishConfig": {
        "access": "public"
      },
    }

    await writeFile(`./dist/package.json`, JSON.stringify(npmPkg, null, 2), {
      flag: 'w',
    })

    return paths
  } catch (error) {
    errorHandler(error)
  }
}

async function createDefinitions(paths) {
  try {
    const iconExports = paths.reduce((acc, path) => {
      const { fileName } = getPathsInfo(path)

      writeDefinitions(path).catch(errorHandler)

      return `${acc}
export * from './${fileName}Icon';`
    }, '')

    await writeFile(`./dist/index.d.ts`, iconExports, {
      flag: 'w',
    })

    await writeFile(`./dist/index.js`, iconExports, {
      flag: 'w',
    }).catch(console.error)

    return paths
  } catch (error) {
    errorHandler(error)
  }
}
exports.createDefinitions = createDefinitions

async function writeDefinitions(path) {
  try {
    const { fileName } = getPathsInfo(path)

    const data = `import { FC } from "react";
import { IconInterface } from "@redesign-system/ui-core";
export declare const ${fileName}Icon: FC<IconInterface>;`

    await writeFile(`./dist/${fileName}Icon.d.ts`, data, { flag: 'w' })
  } catch (error) {
    errorHandler(error)
  }
}
