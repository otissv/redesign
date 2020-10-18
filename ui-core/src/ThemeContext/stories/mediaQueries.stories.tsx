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
    color: ['blue', 'blue', 'blue', 'blue'],
    background: ['green', 'pink', 'yellow', 'purple'],
  }

  return (
    <ThemeProvider>
      <Box display="flex" flexWrap="wrap">
        <Box css={boxCss} mq={mq}>
          Media Queries
        </Box>

        <Box css={boxCss} mq={mq}>
          Media Queries
        </Box>

        <Box css={boxCss} mq={mq}>
          Media Queries
        </Box>
      </Box>
    </ThemeProvider>
  )
}
