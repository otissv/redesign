import React from 'react'

import { ThemeProvider } from '@redesign-system/ui-core'
import { Timer } from './Timer'

export default {
  title: 'Components/Timer',
  component: Timer,
}

export const Default = () => {
  let year = new Date().getFullYear()
  const endTime = new Date(year + 1, 11, 31).toISOString()

  return (
    <ThemeProvider>
      <Timer endTime={endTime} />
    </ThemeProvider>
  )
}

export const Countdown = () => {
  let year = new Date().getFullYear()
  const endTime = new Date(year + 1, 11, 31).toISOString()

  return (
    <ThemeProvider>
      <Timer endTime={endTime} countdown />
    </ThemeProvider>
  )
}
