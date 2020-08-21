const glob = require('glob-promise')
const camelCase = require('lodash/fp/camelCase')
const upperFirst = require('lodash/fp/upperFirst')
const fs = require('fs')
const util = require('util')

const writeFile = util.promisify(fs.writeFile)
const readFile = util.promisify(fs.readFile)
const mkdir = util.promisify(fs.mkdir)

const errorHandler = error => console.log(error)
const log = arg => console.log(arg)
const map = fn => list => list.map(i => fn(i))

const matchName = file =>
  file.match(/(?<=\.\/svg\/)(.*)(?=\.svg)/)
    ? Promise.resolve(file.match(/(?<=\.\/svg\/)(.*)(?=\.svg)/)[0])
    : Promise.resolve()

const requireSvg = path => fileName =>
  fileName
    ? {
        fileName: upperFirst(camelCase(fileName)),
        data: readFile(path, 'utf8').catch(errorHandler),
      }
    : Promise.resolve({})

const getData = async ({ fileName, data } = {}) => {
  try {
    let _data = await data

    if (!_data || !fileName) return
    // _data.replace(/id="mdi-ab-testing"/, "");
    _data = _data.replace(/<\?xml(.*)viewBox="0 0 24 24">/, '')
    _data = _data.replace(/<\/svg>/, '')

    return { data: _data, fileName }
  } catch (error) {
    return error
  }
}

const makeReact = async ({ fileName, data }) => {
  try {
    const componentName = `${fileName}Icon`

    const componentString = `import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const ${componentName}: FC<IconsInterface> = function ${componentName}({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => \`${componentName} \${className}\`, [className]);

  return (
    <Icon alt="${fileName}" className={classNames} {...propsRest}>
      ${await data}
    </Icon>
  );
};

${componentName}.displayName = '${componentName}';  
  `

    return {
      fileName,
      data: componentString,
      dest: './src/icons',
    }
  } catch (error) {
    return error
  }
}

const writeDateToFile = ({ data, fileName, dest } = {}) => {
  if (!data || !fileName) return
  return writeFile(`${dest}/${fileName}.tsx`, data).catch(errorHandler)
}

glob('./svg/*')
  .then(path => {
    const exportsString = path.reduce((acc, p) => {
      const fileName = upperFirst(
        camelCase(p.match(/(?<=\.\/svg\/)(.*)(?=\.svg)/)[0])
      )

      return `${acc}
export * from './icons/${fileName}'`
    }, "export * from './Icon'")

    return {
      fileName: 'index',
      data: exportsString,
      dest: './src',
    }
  })
  .then(writeDateToFile)
  .catch(console.error)

glob('./svg/*')
  .then(
    map(path => {
      return matchName(path)
        .then(requireSvg(path))
        .then(getData)
        .then(makeReact)
        .then(writeDateToFile)
        .then(() => {
          const typesString = `import { IconInterface } from './Icon'

export interface IconsInterface
  extends Pick<
    IconInterface,
    'appearance' | 'height' | 'hoverColor' | 'viewBox' | 'width' | 'title'
  > {
  [key:string]: any
}
          `

          return {
            fileName: 'icons.types',
            data: typesString,
            dest: './src',
          }
        })
        .then(writeDateToFile)
        .catch(errorHandler)
    })
  )
  .catch(console.error)

glob('./svg/*')
  .then(path => {
    // console.log(path);

    const fileNames = path.map(p =>
      upperFirst(camelCase(p.match(/(?<=\.\/svg\/)(.*)(?=\.svg)/)[0]))
    )

    const imports = fileNames
      .map(fileName => `import { ${fileName}Icon } from './icons/${fileName}'`)
      .join('\n')

    const elements = fileNames.map(fileName => `<${fileName}Icon />`).join('\n')

    const componentString = `import React from 'react';
import { Base, ThemeProvider } from '@redesign/ui-core'

import { Icon  } from './Icon'

${imports}

export default {
  title: 'Icons',
  component: Icon,
};

export const Default = () => (
  <ThemeProvider>
    <Base match margin={2} display="inline-block">
      ${elements}
    </Base>
  </ThemeProvider>
);
`

    return {
      fileName: 'icons.stories',
      data: componentString,
      dest: './src',
    }
  })
  .then(writeDateToFile)
  .catch(console.error)
