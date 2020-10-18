import React from 'react'
import { theme, Box, Td, Th } from './story.components'
import { ThemeProvider } from '../ThemeProvider'

export default {
  title: 'Theme/Transition',
}

export const Transition = () => {
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
            {Object.entries(theme.transition).map(([key, transition]) => {
              return (
                <tr key={key}>
                  <Td>{key}</Td>
                  <Td>
                    {typeof transition === 'function'
                      ? (transition as any)()
                      : (transition as string)}
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
