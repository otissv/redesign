const {
  readFile,
  errorHandler,
  writeDateToFile,
  getPathsInfo,
} = require('./utils')

function createIcons(path) {
  return pathInfo(path)
    .then(requireSvg)
    .then(makeReactIcon)

    .then(props => ({
      ...props,
      dest: `./src/icons`,
    }))
    .then(writeDateToFile)
    .catch(errorHandler)
}
exports.createIcons = createIcons

async function requireSvg({ path, ...props }) {
  try {
    return {
      ...props,
      path,
      data: await readFile(path, 'utf8').catch(console.error),
    }
  } catch (error) {
    errorHandler(error)
  }
}

async function makeReactIcon({ fileName, data, ...props }) {
  try {
    const componentName = `${fileName}Icon`
    const componentString = `import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ${componentName}: FC<IconInterface> = function ${componentName}({
      className,
      ...propsRest
    }) {
      const classNames =  \`${componentName} \${className}\`;
      return (
        <Icon alt="${fileName}" className={classNames} {...propsRest}>
          ${await data}
        </Icon>
      );
    };
    ${componentName}.displayName = '${componentName}';
      `
    return {
      ...props,
      fileName: `${fileName}Icon`,
      data: componentString,
    }
  } catch (error) {
    errorHandler(error)
  }
}

async function pathInfo(path) {
  try {
    return getPathsInfo(path)
  } catch (error) {
    errorHandler(error)
  }
}
