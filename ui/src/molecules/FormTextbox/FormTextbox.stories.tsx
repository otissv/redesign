import React from 'react'

import { ThemeProvider } from '@redesign/ui-core'
import { FormTextbox } from './FormTextbox'
import { Box } from '../../atoms'

export default {
  title: 'Components/Molecules/FormTextbox',
  component: FormTextbox,
}

const control = {
  onChange(_e: any) {},
  onBlur(_e: any) {},
  onFocus(_e: any) {},
}

export const Default = () => (
  <ThemeProvider>
    <Box m="default">
      <FormTextbox
        id="default"
        marginLeft={4}
        widths={4}
        placeholder="Search"
        control={control}
        label="Search"
        helpMessage="Search for something"
      />
    </Box>
  </ThemeProvider>
)

export const ErrorMessage = () => (
  <ThemeProvider>
    <Box m="default">
      <FormTextbox
        id="withError"
        marginLeft={4}
        widths={4}
        control={control}
        label="UserName"
        required
        errorMessage="User name is required"
      />
    </Box>
  </ThemeProvider>
)
