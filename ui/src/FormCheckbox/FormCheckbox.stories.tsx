import React from 'react'

import { ThemeProvider } from '@redesign-system/ui-core'
import { FormCheckbox } from './FormCheckbox'
import { Box } from '../Box'

export default {
  title: 'Components/FormCheckbox',
  component: FormCheckbox,
}

export const Default = () => {
  const [orange, setOrange] = React.useState<boolean>()
  const [apple, setApple] = React.useState<boolean>()
  const [pear, setPear] = React.useState<boolean>()

  function onChange(e: any) {
    const checked = e.target.checked

    switch (e.target.id) {
      case 'orange':
        setOrange(checked)
        break

      case 'apple':
        setApple(checked)
        break

      case 'pear':
        setPear(checked)
        break
    }
  }

  return (
    <ThemeProvider>
      <Box m="default">
        <FormCheckbox
          id="orange"
          marginLeft={4}
          widths={4}
          onChange={onChange}
          checked={orange}
          label="Orange"
        />
        <FormCheckbox
          id="apple"
          marginLeft={4}
          widths={4}
          onChange={onChange}
          checked={apple}
          label="Apple"
        />
        <FormCheckbox
          id="pear"
          marginLeft={4}
          widths={4}
          onChange={onChange}
          checked={pear}
          label="pears"
        />
      </Box>
    </ThemeProvider>
  )
}

export const ErrorMessage = () => {
  const [checked, setChecked] = React.useState<boolean>()
  const [errorMessage, setErrorMessage] = React.useState('')

  function onChange(e: any) {
    setChecked(e.target.value)
  }

  const control = {
    onBlur(e: any) {
      const invalid = !Boolean(e.target.checked)

      if (invalid) {
        setErrorMessage('User name is required')
      } else {
        setErrorMessage('')
      }
    },
  }

  return (
    <ThemeProvider>
      <Box m="default">
        <FormCheckbox
          id="withError"
          marginLeft={4}
          widths={4}
          onChange={onChange}
          control={control}
          checked={checked}
          label="UserName"
          required
          errorMessage={errorMessage}
        />
      </Box>
    </ThemeProvider>
  )
}
