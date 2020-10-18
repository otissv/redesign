import React from 'react'
import { theme, Box, Td, Th } from './story.components'
import { ThemeProvider } from '../ThemeProvider'

export default {
  title: 'Theme/Radius',
}

export const Radius = () => {
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
            {Object.entries(theme.radius).map(([key, radius]) => {
              return (
                <tr key={key}>
                  <Td>{key}</Td>
                  <Td>{radius as string}</Td>
                  <Td>
                    <div
                      style={{
                        height: '100px',
                        width: '100px',
                        background: '#ddd',
                        borderRadius: radius as string,
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
