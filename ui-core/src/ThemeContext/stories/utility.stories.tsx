import React from 'react'
import { theme, Box, Td, Th } from './story.components'
import { ThemeProvider } from '../ThemeProvider'

export default {
  title: 'Theme/Utility',
}

console.log(theme)

export const Utility = () => {
  return (
    <ThemeProvider>
      <Box display="flex" flexWrap="wrap">
        <table>
          <thead>
            <tr>
              <Th>Functions</Th>
              <Th>Descriptions</Th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(theme.utility).map(key => {
              return (
                <tr key={key}>
                  <Td>{key}</Td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Box>
    </ThemeProvider>
  )
}
