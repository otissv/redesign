import React from 'react'

import { ThemeProvider } from '@redesign-system/ui-core'
import { Box } from '../Box'
import { TextArea } from './TextArea'

export default {
  title: 'Components/TextArea',
  component: TextArea,
}

export const Default = () => (
  <ThemeProvider>
    <div>
      <TextArea label="Text area Default" id="textbox" placeholder="TextArea" />
    </div>
  </ThemeProvider>
)

export const Appearance = () => (
  <ThemeProvider>
    <Box childrenProps={{ mb: 5 }}>
      <TextArea
        label="Text area Appearance Default"
        id="textbox"
        placeholder="Default"
      />
      <TextArea
        label="Text area Appearance PRIMARY"
        id="textbox"
        appearance="PRIMARY"
        placeholder="Primary"
      />
      <TextArea
        label="Text area Appearance SECONDARY"
        id="textbox"
        appearance="SECONDARY"
        placeholder="Secondary"
      />
      <TextArea
        label="Text area Appearance TERTIARY"
        id="textbox"
        appearance="TERTIARY"
        placeholder="tertiary"
      />
    </Box>
    <Box childrenProps={{ mb: 5 }}>
      <TextArea
        label="Text area ACCENT"
        id="textbox"
        appearance="ACCENT"
        placeholder="Accent"
      />
      <TextArea
        label="Text area PRIMARY ACCENT"
        id="textbox"
        appearance="PRIMARY_ACCENT"
        placeholder="Primary Accent"
      />
      <TextArea
        label="Text area SECONDARY ACCENT"
        id="textbox"
        appearance="SECONDARY_ACCENT"
        placeholder="Secondary Accent"
      />
      <TextArea
        label="Text area TERTIARY ACCENT"
        id="textbox"
        appearance="TERTIARY_ACCENT"
        placeholder="tertiary Accent"
      />
    </Box>
    <Box childrenProps={{ mb: 5 }}>
      <TextArea
        label="Text area ACTIVE"
        id="textbox"
        appearance="ACTIVE"
        placeholder="Active"
      />
      <TextArea
        label="Text area PRIMARY ACTIVE"
        id="textbox"
        appearance="PRIMARY_ACTIVE"
        placeholder="Primary Active"
      />
      <TextArea
        label="Text area TERTIARY ACTIVE"
        id="textbox"
        appearance="SECONDARY_ACTIVE"
        placeholder="Secondary Active"
      />
      <TextArea
        label="Text area TERTIARY Active"
        id="textbox"
        appearance="TERTIARY_ACTIVE"
        placeholder="Tertiary Active"
      />
    </Box>
    <Box childrenProps={{ mb: 5 }}>
      <TextArea
        label="Text area ACTION"
        id="textbox"
        appearance="ACTION"
        placeholder="Action"
      />
      <TextArea
        label="Text area PRIMARY ACTION"
        id="textbox"
        appearance="PRIMARY_ACTION"
        placeholder="Primary Action"
      />
      <TextArea
        label="Text area SECONDARY ACTION"
        id="textbox"
        appearance="SECONDARY_ACTION"
        placeholder="Secondary Action"
      />
      <TextArea
        label="Text area TERTIARY ACTION"
        id="textbox"
        appearance="TERTIARY_ACTION"
        placeholder="Tertiary Action"
      />
    </Box>
    <Box childrenProps={{ mb: 5 }}>
      <TextArea
        label="Text area DANGER"
        id="textbox"
        appearance="DANGER"
        placeholder="Danger"
      />
      <TextArea
        label="Text area PRIMARY DANGER"
        id="textbox"
        appearance="PRIMARY_DANGER"
        placeholder="Primary Danger"
      />
      <TextArea
        label="Text area SECONDARY DANGER"
        id="textbox"
        appearance="SECONDARY_DANGER"
        placeholder="Secondary Danger"
      />
      <TextArea
        label="Text area TERTIARY DANGER"
        id="textbox"
        appearance="TERTIARY_DANGER"
        placeholder="Tertiary Danger"
      />
    </Box>
    <Box childrenProps={{ mb: 5 }}>
      <TextArea
        label="Text area ERROR"
        id="textbox"
        appearance="ERROR"
        placeholder="Error"
      />
      <TextArea
        label="Text area PRIMARY ERROR"
        id="textbox"
        appearance="PRIMARY_ERROR"
        placeholder="Primary Error"
      />
      <TextArea
        label="Text area SECONDARY ERROR"
        id="textbox"
        appearance="SECONDARY_ERROR"
        placeholder="Secondary Error"
      />
      <TextArea
        label="Text area TERTIARY ERROR"
        id="textbox"
        appearance="TERTIARY_ERROR"
        placeholder="Tertiary Error"
      />
    </Box>
    <Box childrenProps={{ mb: 5 }}>
      <TextArea
        label="Text area SUCCESS"
        id="textbox"
        appearance="SUCCESS"
        placeholder="Success"
      />
      <TextArea
        label="Text area PRIMARY SUCCESS"
        id="textbox"
        appearance="PRIMARY_SUCCESS"
        placeholder="Primary Success"
      />
      <TextArea
        label="Text area SECONDARY SUCCESS"
        id="textbox"
        appearance="SECONDARY_SUCCESS"
        placeholder="Secondary Success"
      />
      <TextArea
        label="Text area TERTIARY SUCCESS"
        id="textbox"
        appearance="TERTIARY_SUCCESS"
        placeholder="Tertiary Success"
      />
    </Box>
    <Box childrenProps={{ mb: 5 }}>
      <TextArea
        label="Text area WARNING"
        id="textbox"
        appearance="WARNING"
        placeholder="Warning"
      />
      <TextArea
        label="Text area PRIMARY WARNING"
        id="textbox"
        appearance="PRIMARY_WARNING"
        placeholder="Primary Warning"
      />
      <TextArea
        label="Text area SECONDARY WARNING"
        id="textbox"
        appearance="SECONDARY_WARNING"
        placeholder="Secondary Warning"
      />
      <TextArea
        label="Text area Tertiary WARNINGING"
        id="textbox"
        appearance="TERTIARY_WARNING"
        placeholder="Tertiary Warning"
      />
    </Box>
    <Box childrenProps={{ mb: 5 }}>
      <TextArea
        label="Text area DISABLED"
        id="textbox"
        appearance="DISABLED"
        placeholder="Disabled"
      />
      <TextArea
        label="Text area PRIMARY DISABLED"
        id="textbox"
        appearance="PRIMARY_DISABLED"
        placeholder="Primary Disabled"
      />
      <TextArea
        label="Text area Secondary DISABLED"
        id="textbox"
        appearance="SECONDARY_DISABLED"
        placeholder="Secondary Disabled"
      />
      <TextArea
        label="Text area Tertiary DISABLED"
        id="textbox"
        appearance="TERTIARY_DISABLED"
        placeholder="Tertiary Disabled"
      />
    </Box>
  </ThemeProvider>
)
