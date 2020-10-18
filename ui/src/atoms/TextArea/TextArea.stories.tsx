import React from 'react'

import { ThemeProvider } from '@redesign/ui-core'
import { Box } from '../Box'
import { TextArea } from './TextArea'

export default {
  title: 'Components/Atoms/TextArea',
  component: TextArea,
}

export const Default = () => (
  <ThemeProvider>
    <div>
      <TextArea id="textbox" placeholder="TextArea" />
    </div>
  </ThemeProvider>
)

export const Appearance = () => (
  <ThemeProvider>
    <Box childrenProps={{ mb: 5 }}>
      <TextArea id="textbox" placeholder="Default" />
      <TextArea id="textbox" appearance="PRIMARY" placeholder="Primary" />
      <TextArea id="textbox" appearance="SECONDARY" placeholder="Secondary" />
      <TextArea id="textbox" appearance="TERTIARY" placeholder="tertiary" />
    </Box>
    <Box childrenProps={{ mb: 5 }}>
      <TextArea id="textbox" appearance="ACCENT" placeholder="Accent" />
      <TextArea
        id="textbox"
        appearance="PRIMARY_ACCENT"
        placeholder="Primary Accent"
      />
      <TextArea
        id="textbox"
        appearance="SECONDARY_ACCENT"
        placeholder="Secondary Accent"
      />
      <TextArea
        id="textbox"
        appearance="TERTIARY_ACCENT"
        placeholder="tertiary Accent"
      />
    </Box>
    <Box childrenProps={{ mb: 5 }}>
      <TextArea id="textbox" appearance="ACTIVE" placeholder="Active" />
      <TextArea
        id="textbox"
        appearance="PRIMARY_ACTIVE"
        placeholder="Primary Active"
      />
      <TextArea
        id="textbox"
        appearance="SECONDARY_ACTIVE"
        placeholder="Secondary Active"
      />
      <TextArea
        id="textbox"
        appearance="TERTIARY_ACTIVE"
        placeholder="Tertiary Active"
      />
    </Box>
    <Box childrenProps={{ mb: 5 }}>
      <TextArea id="textbox" appearance="ACTION" placeholder="Action" />
      <TextArea
        id="textbox"
        appearance="PRIMARY_ACTION"
        placeholder="Primary Action"
      />
      <TextArea
        id="textbox"
        appearance="SECONDARY_ACTION"
        placeholder="Secondary Action"
      />
      <TextArea
        id="textbox"
        appearance="TERTIARY_ACTION"
        placeholder="Tertiary Action"
      />
    </Box>
    <Box childrenProps={{ mb: 5 }}>
      <TextArea id="textbox" appearance="DANGER" placeholder="Danger" />
      <TextArea
        id="textbox"
        appearance="PRIMARY_DANGER"
        placeholder="Primary Danger"
      />
      <TextArea
        id="textbox"
        appearance="SECONDARY_DANGER"
        placeholder="Secondary Danger"
      />
      <TextArea
        id="textbox"
        appearance="TERTIARY_DANGER"
        placeholder="Tertiary Danger"
      />
    </Box>
    <Box childrenProps={{ mb: 5 }}>
      <TextArea id="textbox" appearance="ERROR" placeholder="Error" />
      <TextArea
        id="textbox"
        appearance="PRIMARY_ERROR"
        placeholder="Primary Error"
      />
      <TextArea
        id="textbox"
        appearance="SECONDARY_ERROR"
        placeholder="Secondary Error"
      />
      <TextArea
        id="textbox"
        appearance="TERTIARY_ERROR"
        placeholder="Tertiary Error"
      />
    </Box>
    <Box childrenProps={{ mb: 5 }}>
      <TextArea id="textbox" appearance="SUCCESS" placeholder="Success" />
      <TextArea
        id="textbox"
        appearance="PRIMARY_SUCCESS"
        placeholder="Primary Success"
      />
      <TextArea
        id="textbox"
        appearance="SECONDARY_SUCCESS"
        placeholder="Secondary Success"
      />
      <TextArea
        id="textbox"
        appearance="TERTIARY_SUCCESS"
        placeholder="Tertiary Success"
      />
    </Box>
    <Box childrenProps={{ mb: 5 }}>
      <TextArea id="textbox" appearance="WARNING" placeholder="Warning" />
      <TextArea
        id="textbox"
        appearance="PRIMARY_WARNING"
        placeholder="Primary Warning"
      />
      <TextArea
        id="textbox"
        appearance="SECONDARY_WARNING"
        placeholder="Secondary Warning"
      />
      <TextArea
        id="textbox"
        appearance="TERTIARY_WARNING"
        placeholder="Tertiary Warning"
      />
    </Box>
    <Box childrenProps={{ mb: 5 }}>
      <TextArea id="textbox" appearance="DISABLED" placeholder="Disabled" />
      <TextArea
        id="textbox"
        appearance="PRIMARY_DISABLED"
        placeholder="Primary Disabled"
      />
      <TextArea
        id="textbox"
        appearance="SECONDARY_DISABLED"
        placeholder="Secondary Disabled"
      />
      <TextArea
        id="textbox"
        appearance="TERTIARY_DISABLED"
        placeholder="Tertiary Disabled"
      />
    </Box>
  </ThemeProvider>
)
