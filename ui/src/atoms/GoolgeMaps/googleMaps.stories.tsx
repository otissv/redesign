import React from 'react'
import { ThemeProvider } from '@redesign/ui-core'

import { GoogleMaps } from './GoogleMaps'
import { useString } from '../../hooks/useString'
import { Textbox } from '../Textbox'

export default {
  title: 'Components/Atoms/GoogleMaps',
  component: GoogleMaps,
}

export const Default = () => {
  const { string: location, onChange: onLocationClick } = useString('London')

  return (
    <ThemeProvider>
      <Textbox
        id="location"
        label="Search location"
        value={location}
        onChange={onLocationClick}
        mb={4}
      />
      <GoogleMaps location={location}></GoogleMaps>
    </ThemeProvider>
  )
}
