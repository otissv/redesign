import React from 'react'

import { ThemeProvider } from '@redesign-system/ui-core'
import { FixedWidth } from './FixedWidth'

export default {
  title: 'Components/FixedWidth',
  component: FixedWidth,
}

export const Default = () => (
  <ThemeProvider>
    <FixedWidth mw="600px">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </FixedWidth>
  </ThemeProvider>
)
