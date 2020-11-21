import React from 'react'
import { createTheme } from '@redesign-system/theme'
import { ThemeProvider } from '../../ThemeContext'

import { Box } from './story.components'

export default {
  title: 'Custom Theme',
}

export const Light = () => {
  const theme: any = createTheme({
    color: {
      accent: 'green',
      text: 'grey_800',
      defaults: {
        background: 'grey_050',
      },
    },
    border: {
      thinColor: 'red',
      thinWidth: '10px',
      thickColor: 'red_900',
      thickWidth: '10px',
    },
    font: {
      family: {
        serif:
          "'Source Code Pro', 'Consolas', 'Inconsolata', 'Monaco', monospace",
        sans:
          "'Source Code Pro', 'Consolas', 'Inconsolata', 'Monaco', monospace",
        mono:
          "'Source Code Pro', 'Consolas', 'Inconsolata', 'Monaco', monospace",
      },
    },
  })

  return (
    <ThemeProvider>
      <Box
        w="100px"
        h="100px"
        theme={theme}
        ff="serif"
        bg="background"
        border="thin"
      >
        serif
      </Box>
    </ThemeProvider>
  )
}
