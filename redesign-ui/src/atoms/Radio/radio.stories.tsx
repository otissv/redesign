import React from 'react'

import { ThemeProvider } from '@redesign/ui-core'
import { Box } from '../Box'

export default {
  title: 'Components/Atoms/Radio',
  component: Radio,
}
import { Radio } from './Radio'

export const Default = () => (
  <ThemeProvider>
    <Radio id="radio" />
    <Radio id="radio" />
    <Radio id="radio" />
  </ThemeProvider>
)

export const Appearance = () => (
  <ThemeProvider>
    <Box mb={5}>
      Default <Radio id="radio" ml={5} />
    </Box>
    <Box mb={5}>
      Primary <Radio id="radio" ml={5} appearance="PRIMARY" />
    </Box>
    <Box mb={5}>
      Accent <Radio id="radio" ml={5} appearance="ACCENT" />
    </Box>
    <Box mb={5}>
      Active <Radio id="radio" ml={5} appearance="ACTIVE" />
    </Box>
    <Box mb={5}>
      Action <Radio id="radio" ml={5} appearance="ACTION" />
    </Box>
    <Box mb={5}>
      Danger <Radio id="radio" ml={5} appearance="DANGER" />
    </Box>
    <Box mb={5}>
      Error <Radio id="radio" ml={5} appearance="ERROR" />
    </Box>
    <Box mb={5}>
      Success <Radio id="radio" ml={5} appearance="SUCCESS" />
    </Box>
    <Box mb={5}>
      Warning <Radio id="radio" ml={5} appearance="WARNING" />
    </Box>
    <Box mb={5}>
      Disabled <Radio id="radio" ml={5} appearance="DISABLED" />
    </Box>
    <Box mb={5}>
      Disabled Checked <Radio id="radio" ml={5} appearance="DISABLED" checked />
    </Box>
  </ThemeProvider>
)
