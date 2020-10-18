import React from 'react'
import { theme, Box, Td, Th } from './story.components'
import { ThemeProvider } from '../ThemeProvider'

export default {
  title: 'Theme/Border',
}

function extractColor(str: string) {
  const value = (str as string).match(
    /(?:^|[ ])#([a-zA-Z0-9]+)|(?:^|[ ])hsla(.*)/
  )?.[0]
  return value ? value.trim() : value
}

export const Border = () => {
  return (
    <ThemeProvider>
      <Box display="flex" flexWrap="wrap">
        <table>
          <thead>
            <tr>
              <Th>Key</Th>
              <Th>Value</Th>
              <Th>Example</Th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(theme.border).map(([key, value]) => {
              const borderColor = extractColor(value as string)
              const borderStyle = (value as string).split(' ')[1] || 'solid'

              return (
                <tr key={key}>
                  <Td>{key}</Td>
                  <Td>{value as string}</Td>
                  <Td>
                    <div
                      style={{
                        height: '100px',
                        width: '100px',
                        border: `1px ${borderStyle} ${borderColor}`,
                      }}
                    ></div>
                  </Td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Box>
    </ThemeProvider>
  )
}
