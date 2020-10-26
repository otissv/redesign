import React from 'react'
import { ThemeProvider } from '@redesign-system/ui-core'
import { Box } from '../Box'

import { Switch } from './Switch'

export default {
  title: 'Components/Switch',
  component: Switch,
}

function SwitchTrigger(props: any) {
  return <Box radius="50%" w="24px" h="24px" {...props} />
}

export const Default = () => {
  return (
    <ThemeProvider>
      <Switch radius="24px" id="switch" label="Switch">
        <SwitchTrigger background="green" />
        <SwitchTrigger background="red" />
      </Switch>
    </ThemeProvider>
  )
}
