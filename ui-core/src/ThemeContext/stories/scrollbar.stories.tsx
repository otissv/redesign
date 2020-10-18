import React from 'react'
import { theme, Box, Td, Th } from './story.components'
import { ThemeProvider } from '../ThemeProvider'

export default {
  title: 'Theme/Scrollbar',
}

export const Scrollbar = () => {
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
            <tr>
              <Td>width</Td>
              <Td>{theme.scrollbar.width}</Td>
            </tr>
            <tr>
              <Td>height</Td>
              <Td>{theme.scrollbar.height}</Td>
            </tr>
            <tr>
              <Td>backgroundColor</Td>
              <Td>{theme.scrollbar.backgroundColor}</Td>
            </tr>
            <tr>
              <Td>corner.backgroundColor</Td>
              <Td>{theme.scrollbar.corner.backgroundColor}</Td>
            </tr>

            <tr>
              <Td>thumb.backgroundColor</Td>
              <Td>{theme.scrollbar.thumb.backgroundColor}</Td>
            </tr>
            <tr>
              <Td>thumb.outline</Td>
              <Td>{theme.scrollbar.thumb.outline}</Td>
            </tr>
            <tr>
              <Td>thumb.transition</Td>
              <Td>{theme.scrollbar.thumb.transition}</Td>
            </tr>
            <tr>
              <Td>thumb.hover</Td>
              <Td>{theme.scrollbar.thumb.hover.backgroundColor}</Td>
            </tr>
          </tbody>
        </table>
      </Box>
    </ThemeProvider>
  )
}
