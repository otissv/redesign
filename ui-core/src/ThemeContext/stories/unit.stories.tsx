import React from 'react'
import { theme, Box, Td, Th } from './story.components'
import { ThemeProvider } from '../ThemeProvider'
export default {
  title: 'Theme/Unit',
}

export const Unit = () => {
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
            {Object.entries(theme.unit).map(([key, unit]) => {
              return (
                <tr key={key}>
                  <Td>{key}</Td>
                  <Td>{unit}</Td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Box>
    </ThemeProvider>
  )
}
