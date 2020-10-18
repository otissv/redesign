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
    <Radio id="radio1" name="radio" label="radio1" />
    <Radio id="radio2" name="radio" label="radio2" />
    <Radio id="radio3" name="radio" label="radio3" />
  </ThemeProvider>
)

export const Appearance = () => (
  <ThemeProvider>
    <Box mb={5}>
      Default <Radio id="radio1" name="radio" ml={2} label="radio default" />
      <Radio id="radio1" name="radio" ml={2} label="radio default" />
      <Radio id="radio1" name="radio" ml={2} label="radio default" />
    </Box>
    <Box mb={5}>
      Primary{' '}
      <Radio
        id="radio_primary1"
        name="primary"
        ml={2}
        appearance="PRIMARY"
        label="radio primary 1"
      />
      <Radio
        id="radio_primary2"
        name="primary"
        ml={2}
        appearance="PRIMARY"
        label="radio primary 2"
      />
      <Radio
        id="radio_primary3"
        name="primary"
        ml={2}
        appearance="PRIMARY"
        label="radio primary 3"
      />
    </Box>

    <Box mb={5}>
      Accent{' '}
      <Radio
        id="radio_accent1"
        name="accent"
        ml={2}
        appearance="ACCENT"
        label="radio accent 1"
      />
      <Radio
        id="radio_accent2"
        name="accent"
        ml={2}
        appearance="ACCENT"
        label="radio accent 2"
      />
      <Radio
        id="radio_accent3"
        name="accent"
        ml={2}
        appearance="ACCENT"
        label="radio accent 3"
      />
    </Box>
    <Box mb={5}>
      Active{' '}
      <Radio
        id="radio_active1"
        name="active"
        ml={2}
        appearance="ACTIVE"
        label="radio active 1"
      />
      <Radio
        id="radio_active2"
        name="active"
        ml={2}
        appearance="ACTIVE"
        label="radio active 2"
      />
      <Radio
        id="radio_active3"
        name="active"
        ml={2}
        appearance="ACTIVE"
        label="radio active 3"
      />
    </Box>
    <Box mb={5}>
      Action{' '}
      <Radio
        id="radio_action1"
        name="action"
        ml={2}
        appearance="ACTION"
        label="radio action 1"
      />
      <Radio
        id="radio_action2"
        name="action"
        ml={2}
        appearance="ACTION"
        label="radio action 2"
      />
      <Radio
        id="radio_action3"
        name="action"
        ml={2}
        appearance="ACTION"
        label="radio action 3"
      />
    </Box>
    <Box mb={5}>
      Danger{' '}
      <Radio
        id="radio_danger1"
        name="danger"
        ml={2}
        appearance="DANGER"
        label="radio danger1"
      />
      <Radio
        id="radio_danger2"
        name="danger"
        ml={2}
        appearance="DANGER"
        label="radio danger2"
      />
      <Radio
        id="radio_danger3"
        name="danger"
        ml={2}
        appearance="DANGER"
        label="radio danger3"
      />
    </Box>
    <Box mb={5}>
      Error{' '}
      <Radio
        id="radio_error1"
        name="error"
        ml={2}
        appearance="ERROR"
        label="radio error1"
      />
      <Radio
        id="radio_error2"
        name="error"
        ml={2}
        appearance="ERROR"
        label="radio error2"
      />
      <Radio
        id="radio_error3"
        name="error"
        ml={2}
        appearance="ERROR"
        label="radio error3"
      />
    </Box>
    <Box mb={5}>
      Success{' '}
      <Radio
        id="radio_success1"
        name="success"
        ml={2}
        appearance="SUCCESS"
        label="radio success1"
      />
      <Radio
        id="radio_success2"
        name="success"
        ml={2}
        appearance="SUCCESS"
        label="radio success2"
      />
      <Radio
        id="radio_success3"
        name="success"
        ml={2}
        appearance="SUCCESS"
        label="radio success3"
      />
    </Box>
    <Box mb={5}>
      Warning{' '}
      <Radio
        id="radio_warning1"
        name="warning"
        ml={2}
        appearance="WARNING"
        label="radio warning1"
      />
      <Radio
        id="radio_warning2"
        name="warning"
        ml={2}
        appearance="WARNING"
        label="radio warning2"
      />
      <Radio
        id="radio_warning3"
        name="warning"
        ml={2}
        appearance="WARNING"
        label="radio warning3"
      />
    </Box>
    <Box mb={5}>
      Disabled{' '}
      <Radio
        id="radio_disabled1"
        name="disabled"
        ml={2}
        appearance="DISABLED"
        label="radio disabled1"
      />
      <Radio
        id="radio_disabled2"
        name="disabled"
        ml={2}
        appearance="DISABLED"
        label="radio disabled2"
      />
      <Radio
        id="radio_disabled3"
        name="disabled"
        ml={2}
        appearance="DISABLED"
        label="radio disabled3"
      />
    </Box>
    <Box mb={5}>
      Disabled Checked
      <Radio
        id="radio_disabled_checked1"
        name="disabled_checked"
        ml={2}
        appearance="DISABLED"
        checked
        label="radio disabled checked1"
      />
      <Radio
        id="radio_disabled_checked2"
        name="disabled_checked"
        ml={2}
        appearance="DISABLED"
        checked
        label="radio disabled checked2"
      />
      <Radio
        id="radio_disabled_checked3"
        name="disabled_checked"
        ml={2}
        appearance="DISABLED"
        checked
        label="radio disabled checked3"
      />
    </Box>
  </ThemeProvider>
)
