import React from 'react'
import { createTheme } from '@redesign-system/theme'

import { ThemeProvider, useTheme } from '../../ThemeContext'
import { Base } from '../../Base'

function Box(props: any) {
  const { theme }: any = useTheme()

  const css = {
    color: 'red',
  }
  return <Base css={css} theme={theme} {...props}></Base>
}

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
    Box: {
      default: {
        color: 'red',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Box w="100px" h="100px" border="thin">
        serif
      </Box>
    </ThemeProvider>
  )
}
