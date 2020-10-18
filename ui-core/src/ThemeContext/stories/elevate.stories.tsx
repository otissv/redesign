import React from 'react'
import { theme, Box, Td, Th } from './story.components'
import { ThemeProvider } from '../ThemeProvider'

export default {
  title: 'Theme/Elevate',
}

export const Elevate = () => {
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
            {Object.entries(theme.elevate).map(([key, elevate]) => {
              // const color = (value as string).match(
              //   /(?:^|[ ])#([a-zA-Z0-9]+)|(?:^|[ ])hsla(.*)/

              return (
                <tr key={key}>
                  <Td>{key}</Td>
                  <Td>{elevate as string}</Td>
                  <Td>
                    <div
                      style={{
                        height: '100px',
                        width: '100px',
                        boxShadow: elevate as string,
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
