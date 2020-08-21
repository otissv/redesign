import React from 'react'

import { ThemeProvider } from '@redesign/ui-core'
import { FormTextbox } from './FormTextbox'
import { Box } from '../../atoms'

export default {
  title: 'Components/Molecules/FormTextbox',
  component: FormTextbox,
}

const control = {
  onChange(_e: any) {
    console.log('onChange')
  },
  onBlur(_e: any) {
    console.log('onBlur')
  },
  onFocus(_e: any) {
    console.log('onFocus')
  },
}

export const Default = () => (
  <ThemeProvider>
    <Box match m="default">
      <FormTextbox
        id=""
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
    <Box match m="default">
      <FormTextbox
        id=""
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
