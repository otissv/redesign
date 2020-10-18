const {
  getPathsInfo,
  foldPaths,
  errorHandler,
  writeDateToFile,
} = require('./utils')

function createStories(paths) {
  return makeStories(paths)
    .then(writeDateToFile)
    .then(foldPaths)
    .catch(errorHandler)
}
exports.createStories = createStories

async function makeStories(paths) {
  try {
    const { icons, imports } = paths.reduce(
      (acc, path) => {
        const { fileName } = getPathsInfo(path)
        return {
          imports: `${acc.imports}
import { ${fileName}Icon } from './icons/${fileName}'`,
          icons: `${acc.icons}
${fileName}Icon,`,
        }
      },
      {
        icons: '',
        imports: '',
      }
    )

    const componentString = `import React from 'react';
import { Base, ThemeProvider } from '@redesign/ui-core'
import { createTheme } from '@redesign/theme'
import CopyToClipboard from 'react-copy-to-clipboard';
import { DebounceInput } from 'react-debounce-input';
import { Icon  } from '@redesign/ui-core'
${imports}
export default {
  title: 'Icons',
  component: Icon,
};
const theme: any = createTheme()
function Copy({ text, Icon, ...propsRest }: { [key: string]: any }) {
  const [state, setState] = React.useState(text)
  const css = ({ theme: { color, elevate, radius } }: any) => {
    return {
      color: color.white,
      background: color.transparent,
      border: 'none',
      borderRadius: radius.rounded,
      '&:hover': { background: color.night_blue_400, boxShadow: elevate[2] },
    }
  }
  function handelOnCopy(text: string) {
    setState('copied')
    setTimeout(() => setState(text), 2000)
  }
  return (
    <CopyToClipboard
      text={text}
      onCopy={handelOnCopy}
    >
      <Base
        className="Copy"
        as="div"
        w="100px"
        textAlign="center"
        css={css}
        theme={theme}
        p={2}
        {...propsRest}
      >
        <Icon w="50px" />
        <Label>{state}</Label>
      </Base>
    </CopyToClipboard>
  )
}
function Label(props: { [key: string]: any }) {
  const css = {
    fontSize: '12px',
  }
  return (
    <Base
      as="span"
      display="block"
      truncate
      css={css}
      theme={theme}
      p={2}
      m={1}
      {...props}
    />
  )
}
const icons =[
${icons}
]
export const Default = () => {
  const [search, setSearch] = React.useState('')
  return (
    <ThemeProvider>
      <DebounceInput
        debounceTimeout={300}
        onChange={event => setSearch(event.target.value)}
        style={{ margin: '0 auto 20px auto', display: 'block' }}
        placeholder="Search icons"
      />
      <Base
        className="container"
        theme={theme}
        match
        margin={2}
        display="inline-block"
      >
        {icons.map(icon => {
          const text = icon.displayName
          if (search.trim() === '') {
            return <CopyIcon key={text} Icon={icon} text={text} />
          }
          return text?.toLowerCase().includes(search.toLowerCase()) ? (
            <CopyIcon key={text} Icon={icon} text={text} />
          ) : null
        })}
      </Base>
    </ThemeProvider>
  )
}
      `
    return {
      paths,
      fileName: 'icons.stories',
      data: componentString,
      dest: './src',
    }
  } catch (error) {
    errorHandler(error)
  }
}
