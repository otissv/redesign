import React from 'react'
import { ThemeProvider } from '@redesign-system/ui-core'

import { MapContent } from './MapContent'
import { Box } from '../Box'

export default {
  title: 'Components/MapContent',
  component: MapContent,
}

export const Default = () => (
  <ThemeProvider>
    <Box mw="1200px">
      <MapContent
        mq={{
          md: {
            h: '300px',
          },
        }}
        location="london"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </MapContent>

      <MapContent
        mq={{
          md: {
            h: '300px',
            flexDirection: 'row-reverse',
          },
        }}
        location="london"
        coverImage={{
          flex: '1',
          overlay: '#f00f0020',
          src:
            'https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </MapContent>
    </Box>
  </ThemeProvider>
)
