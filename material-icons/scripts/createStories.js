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
import { ${fileName}Icon } from './icons/${fileName}Icon'`,
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
import { Base, ThemeProvider } from '@redesign-system/ui-core'
import { createTheme } from '@redesign-system/theme'
import CopyToClipboard from 'react-copy-to-clipboard';
import { DebounceInput } from 'react-debounce-input';
import { Icon  } from '@redesign-system/ui-core'

${imports}

export default {
  title: 'Icons',
  component: Icon,
};

const theme: any = createTheme()



const icons =[
${icons}
]

function Copy({ text, Icon, ...propsRest }: { [key: string]: any }) {
  const [state, setState] = React.useState(text)

  function handelOnCopy(text: string) {
    setState('copied')
    setTimeout(() => setState(text), 2000)
  }

  const copyStyle = {
    color: '#fff',
    background: 'rgba(0,0,0,0)',
    border: 'none',
    borderRadius: '5px',
    width: '100px',
    textAlign: 'center',
    padding: '8px',
    cursor: 'pointer'
  }

  return (
    <CopyToClipboard text={text} onCopy={handelOnCopy}>
      <div className="Copy" style={copyStyle as any} {...propsRest}>
        <Icon w="50px" />
        <Label>{state}</Label>
      </div>
    </CopyToClipboard>
  )
}
function Label(props: { [key: string]: any }) {
  const labelStyles = {
    fontSize: '12px',
    display: 'block',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    padding: '8px',
    margin: '4px',
  }
  return <span style={labelStyles as any} {...props} />
}

export const Default = () => {
  const [search, setSearch] = React.useState('')
  return (
    <ThemeProvider>
      <h1 style={{ marginBottom: '40px',textAlign: 'center' }}>Redesign Material Icons</h1>

      <DebounceInput
        debounceTimeout={300}
        onChange={event => setSearch(event.target.value)}
        style={{
          margin: '0 auto 40px auto',
          display: 'block',
          padding: '6px 8px',
        }}
        placeholder="Search icons"
      />
      <div
        className="Container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {icons.map(icon => {
          const text = icon.displayName
          if (search.trim() === '') {
            return <Copy key={text} Icon={icon} text={text} />
          }
          return text?.toLowerCase().includes(search.toLowerCase()) ? (
            <Copy key={text} Icon={icon} text={text} />
          ) : null
        })}
      </div>
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
