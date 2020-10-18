import React from 'react'
import { theme, Box, Td, Th } from './story.components'
import { ThemeProvider } from '../ThemeProvider'

export default {
  title: 'Theme/Color',
}

export const Color = () => {
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
            {Object.entries(theme.color).map(([key, color]) => {
              return (
                <tr key={key}>
                  <Td>{key}</Td>
                  <Td>{color as string}</Td>
                  <Td>
                    <div
                      style={{
                        height: '100px',
                        width: '100px',
                        background: color as string,
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
