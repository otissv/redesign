import React from 'react'
import { theme, Box, Swatch } from './story.components'
import { ThemeProvider } from '../ThemeProvider'

export default {
  title: 'Theme/Swatches',
}

export const Swatches = () => {
  return (
    <ThemeProvider>
      <Box display="flex" flexWrap="wrap">
        {Object.entries(theme.color).map(([key, color]) => {
          return (
            <Box key={key} mx={3} mb={8} textAlign="center" alignItems="center">
              {key}
              <Swatch
                css={{
                  background: color,
                }}
              />
              {color}
            </Box>
          )
        })}
      </Box>
    </ThemeProvider>
  )
}
