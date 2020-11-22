import React from 'react'
import { theme, Box, Th, Td } from './story.components'
import { ThemeProvider } from '../ThemeProvider'

export default {
  title: 'Theme/MediaQueries',
}

export const MediaQueries = () => {
  return (
    <ThemeProvider>
      <Box display="flex" flexWrap="wrap">
        <table>
          <thead>
            <tr>
              <Th>Key</Th>
              <Th>Value</Th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(theme.mediaQueries).map(([key, query]) => {
              return (
                <tr key={key}>
                  <Td>{key}</Td>
                  <Td>{query as string}</Td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Box>
    </ThemeProvider>
  )
}

export const Example = () => {
  const boxCss = {
    background: 'red',
    width: '100%',
    height: '100px',
    margin: '10px',
  }

  const mq = {
    sm: {
      min: {
        color: 'blue',
        background: 'green',
      },
    },
    md: {
      min: {
        fontSize: '48px',
        color: 'white',
        background: 'black',
      },
    },
  }

  return (
    <ThemeProvider>
      <Box css={boxCss} mq={mq} radius="rounded">
        Media Queries
      </Box>
    </ThemeProvider>
  )
}
