import React from 'react'
import { createTheme } from '@redesign-system/theme'

import { Box } from './story.components'

export default {
  title: 'CustomTheme',
}

export const Light = () => {
  const theme: any = createTheme({
    color: {
      text: 'grey_800',
      defaults: {
        background: 'grey_050',
      },
    },
  })

  return (
    <Box
      w="100px"
      h="100px"
      border="thin"
      theme={theme}
      css={({ theme: { color } }: any) => {
        console.log(color)
        return `
        
          background: ${color.background}
          `
      }}
    >
      {' '}
      Custom theme
    </Box>
  )
}
