import React from 'react'

import { ThemeProvider } from '@redesign-system/ui-core'
import { Box } from '../Box'
import { Textbox } from './Textbox'

export default {
  title: 'Components/Textbox',
  component: Textbox,
}

export const Default = () => (
  <ThemeProvider>
    <div>
      <Textbox label="Textbox Default" id="textbox" placeholder="Textbox" />
    </div>
  </ThemeProvider>
)

export const Appearance = () => (
  <ThemeProvider>
    <Box childrenProps={{ mb: 5 }}>
      <Textbox label="Textbox Default" id="Default" placeholder="Default" />
      <Textbox
        label="Textbox Primary"
        id="PRIMARY"
        appearance="PRIMARY"
        placeholder="Primary"
      />
      <Textbox
        label="Textbox Secondary"
        id="SECONDARY"
        appearance="SECONDARY"
        placeholder="Secondary"
      />
      <Textbox
        label="Textbox Tertiary "
        id="TERTIARY"
        appearance="TERTIARY"
        placeholder="Tertiary"
      />
    </Box>
    <Box childrenProps={{ mb: 5 }}>
      <Textbox
        label="Textbox Accent"
        id="ACCENT"
        appearance="ACCENT"
        placeholder="Accent"
      />
      <Textbox
        label="Textbox Primary Accent"
        id="PRIMARY_ACCENT"
        appearance="PRIMARY_ACCENT"
        placeholder="Primary Accent"
      />
      <Textbox
        label="Textbox Secondary Accent"
        id="SECONDARY_ACCENT"
        appearance="SECONDARY_ACCENT"
        placeholder="Secondary Accent"
      />
      <Textbox
        label="Textbox Tertiary Accent"
        id="TERTIARY_ACCENT"
        appearance="TERTIARY_ACCENT"
        placeholder="Tertiary Accent"
      />
    </Box>
    <Box childrenProps={{ mb: 5 }}>
      <Textbox
        label="Textbox Active"
        id="ACTIVE"
        appearance="ACTIVE"
        placeholder="Active"
      />
      <Textbox
        label="Textbox Primary Active"
        id="PRIMARY_ACTIVE"
        appearance="PRIMARY_ACTIVE"
        placeholder="Primary Active"
      />
      <Textbox
        label="Textbox Secondary Active"
        id="SECONDARY_ACTIVE"
        appearance="SECONDARY_ACTIVE"
        placeholder="Secondary Active"
      />
      <Textbox
        label="Textbox Tertiary Active"
        id="TERTIARY_ACTIVE"
        appearance="TERTIARY_ACTIVE"
        placeholder="Tertiary Active"
      />
    </Box>
    <Box childrenProps={{ mb: 5 }}>
      <Textbox
        label="Textbox Action"
        id="ACTION"
        appearance="ACTION"
        placeholder="Action"
      />
      <Textbox
        label="Textbox Primary Action"
        id="PRIMARY_ACTION"
        appearance="PRIMARY_ACTION"
        placeholder="Primary Action"
      />
      <Textbox
        label="Textbox Secondary Action"
        id="SECONDARY_ACTION"
        appearance="SECONDARY_ACTION"
        placeholder="Secondary Action"
      />
      <Textbox
        label="Textbox Tertiary Action"
        id="TERTIARY_ACTION"
        appearance="TERTIARY_ACTION"
        placeholder="Tertiary Action"
      />
    </Box>
    <Box childrenProps={{ mb: 5 }}>
      <Textbox
        label="Textbox Danger"
        id="DANGER"
        appearance="DANGER"
        placeholder="Danger"
      />
      <Textbox
        label="Textbox Primary Danger"
        id="PRIMARY_DANGER"
        appearance="PRIMARY_DANGER"
        placeholder="Primary Danger"
      />
      <Textbox
        label="Textbox Secondary Danger"
        id="SECONDARY_DANGER"
        appearance="SECONDARY_DANGER"
        placeholder="Secondary Danger"
      />
      <Textbox
        label="Textbox Tertiary Danger"
        id="TERTIARY_DANGER"
        appearance="TERTIARY_DANGER"
        placeholder="Tertiary Danger"
      />
    </Box>
    <Box childrenProps={{ mb: 5 }}>
      <Textbox
        label="Textbox Error"
        id="ERROR"
        appearance="ERROR"
        placeholder="Error"
      />
      <Textbox
        label="Textbox Primary Error"
        id="PRIMARY_ERROR"
        appearance="PRIMARY_ERROR"
        placeholder="Primary Error"
      />
      <Textbox
        label="Textbox Secondary Error"
        id="SECONDARY_ERROR"
        appearance="SECONDARY_ERROR"
        placeholder="Secondary Error"
      />
      <Textbox
        label="Textbox Tertiary Error"
        id="TERTIARY_ERROR"
        appearance="TERTIARY_ERROR"
        placeholder="Tertiary Error"
      />
    </Box>
    <Box childrenProps={{ mb: 5 }}>
      <Textbox
        label="Success"
        id="SUCCESS"
        appearance="SUCCESS"
        placeholder="Success"
      />
      <Textbox
        label="Primary Success"
        id="PRIMARY_SUCCESS"
        appearance="PRIMARY_SUCCESS"
        placeholder="Primary Success"
      />
      <Textbox
        label="Secondary Success"
        id="SECONDARY_SUCCESS"
        appearance="SECONDARY_SUCCESS"
        placeholder="Secondary Success"
      />
      <Textbox
        label="Tertiary Success"
        id="TERTIARY_SUCCESS"
        appearance="TERTIARY_SUCCESS"
        placeholder="Tertiary Success"
      />
    </Box>
    <Box childrenProps={{ mb: 5 }}>
      <Textbox
        label="Warning"
        id="WARNING"
        appearance="WARNING"
        placeholder="Warning"
      />
      <Textbox
        label="Primary Warning"
        id="PRIMARY_WARNING"
        appearance="PRIMARY_WARNING"
        placeholder="Primary Warning"
      />
      <Textbox
        label="Secondary Warning"
        id="SECONDARY_WARNING"
        appearance="SECONDARY_WARNING"
        placeholder="Secondary Warning"
      />
      <Textbox
        label="Tertiary Warning"
        id="TERTIARY_WARNING"
        appearance="TERTIARY_WARNING"
        placeholder="Tertiary Warning"
      />
    </Box>
    <Box childrenProps={{ mb: 5 }}>
      <Textbox
        label="Disabled"
        id="DISABLED"
        appearance="DISABLED"
        placeholder="Disabled"
      />
      <Textbox
        label="Primary Disabled"
        id="PRIMARY_DISABLED"
        appearance="PRIMARY_DISABLED"
        placeholder="Primary Disabled"
      />
      <Textbox
        label="Secondary Disabled"
        id="SECONDARY_DISABLED"
        appearance="SECONDARY_DISABLED"
        placeholder="Secondary Disabled"
      />
      <Textbox
        label="Tertiary Disabled"
        id="TERTIARY_DISABLED"
        appearance="TERTIARY_DISABLED"
        placeholder="Tertiary Disabled"
      />
    </Box>
  </ThemeProvider>
)

export const Size = () => (
  <ThemeProvider>
    <Box childrenProps={{ mb: 5 }}>
      <Textbox label="Size 1" id="size-1" size={1} placeholder="Size 1" />
      <Textbox label="Size 2" id="size-2" size={2} placeholder="Size 2" />
      <Textbox label="Size 3" id="size-3" size={3} placeholder="Size 3" />
      <Textbox label="Size 4" id="size-4" size={4} placeholder="Size 4" />
      <Textbox label="Size 5" id="size-5" size={5} placeholder="Size 5" />
      <Textbox label="Size 6" id="size-6" size={6} placeholder="Size 6" />
      <Textbox label="Size 7" id="size-7" size={7} placeholder="Size 7" />
      <Textbox label="Size 8" id="size-8" size={8} placeholder="Size 8" />
      <Textbox label="Size 9" id="size-9" size={9} placeholder="Size 9" />
      <Textbox label="Size 10" id="size-10" size={10} placeholder="Size 10" />
      <Textbox label="Size 11" id="size-11" size={11} placeholder="Size 11" />
      <Textbox label="Size 12" id="size-12" size={12} placeholder="Size 12" />
    </Box>
  </ThemeProvider>
)

export const Widths = () => (
  <ThemeProvider>
    <Box childrenProps={{ mb: 5, display: 'block' }}>
      <Textbox label="Width 1" id="width-1" widths={1} placeholder="widths 1" />
      <Textbox label="Width 2" id="width-2" widths={2} placeholder="widths 2" />
      <Textbox label="Width 3" id="width-3" widths={3} placeholder="widths 3" />
      <Textbox label="Width 4" id="width-4" placeholder="widths 4" />
      <Textbox label="Width 5" id="width-5" widths={5} placeholder="widths 5" />
      <Textbox label="Width 6" id="width-6" widths={6} placeholder="widths 6" />
      <Textbox label="Width 7" id="width-7" widths={7} placeholder="widths 7" />
      <Textbox label="Width 8" id="width-8" widths={8} placeholder="widths 8" />
      <Textbox label="Width 9" id="width-9" widths={9} placeholder="widths 9" />
      <Textbox
        label="Width 10"
        id="width-10"
        widths={10}
        placeholder="widths 10"
      />
    </Box>
  </ThemeProvider>
)

export const Textarea = () => (
  <ThemeProvider>
    <Box childrenProps={{ mb: 5 }}>
      <Textbox
        label="Text area Default"
        id="textarea-Default"
        as="textarea"
        placeholder="Default"
      />
      <Textbox
        label="Text area Primary"
        id="textarea-PRIMARY"
        as="textarea"
        appearance="PRIMARY"
        placeholder="Primary"
      />
      <Textbox
        label="Text area Secondary"
        id="textarea-SECONDARY"
        as="textarea"
        appearance="SECONDARY"
        placeholder="Secondary"
      />
      <Textbox
        label="Text area Tertiary"
        id="textarea-TERTIARY"
        as="textarea"
        appearance="TERTIARY"
        placeholder="Tertiary"
      />
    </Box>
    <Box childrenProps={{ mb: 5 }}>
      <Textbox
        label="Text area Accent"
        id="textarea-ACCENT"
        as="textarea"
        appearance="ACCENT"
        placeholder="Accent"
      />
      <Textbox
        label="Text area Primary Accent"
        id="textarea-PRIMARY_ACCENT"
        as="textarea"
        appearance="PRIMARY_ACCENT"
        placeholder="Primary Accent"
      />
      <Textbox
        label="Text area Secondary Accent"
        id="textarea-SECONDARY_ACCENT"
        as="textarea"
        appearance="SECONDARY_ACCENT"
        placeholder="Secondary Accent"
      />
      <Textbox
        label="Text area Tertiary Accent"
        id="textarea-TERTIARY_ACCENT"
        as="textarea"
        appearance="TERTIARY_ACCENT"
        placeholder="Tertiary Accent"
      />
    </Box>
    <Box childrenProps={{ mb: 5 }}>
      <Textbox
        label="Text area Active"
        id="textarea-ACTIVE"
        as="textarea"
        appearance="ACTIVE"
        placeholder="Active"
      />
      <Textbox
        label="Text area Primary Active"
        id="textarea-PRIMARY_ACTIVE"
        as="textarea"
        appearance="PRIMARY_ACTIVE"
        placeholder="Primary Active"
      />
      <Textbox
        label="Text area Secondary Active"
        id="textarea-SECONDARY_ACTIVE"
        as="textarea"
        appearance="SECONDARY_ACTIVE"
        placeholder="Secondary Active"
      />
      <Textbox
        label="Text area Tertiary Active"
        id="textarea-TERTIARY_ACTIVE"
        as="textarea"
        appearance="TERTIARY_ACTIVE"
        placeholder="Tertiary Active"
      />
    </Box>
    <Box childrenProps={{ mb: 5 }}>
      <Textbox
        label="Text area Action"
        id="textarea-ACTION"
        as="textarea"
        appearance="ACTION"
        placeholder="Action"
      />
      <Textbox
        label="Text area Primary Action"
        id="textarea-PRIMARY_ACTION"
        as="textarea"
        appearance="PRIMARY_ACTION"
        placeholder="Primary Action"
      />
      <Textbox
        label="Text area Secondary Action"
        id="textarea-SECONDARY_ACTION"
        as="textarea"
        appearance="SECONDARY_ACTION"
        placeholder="Secondary Action"
      />
      <Textbox
        label="Text area Tertiary Action"
        id="textarea-TERTIARY_ACTION"
        as="textarea"
        appearance="TERTIARY_ACTION"
        placeholder="Tertiary Action"
      />
    </Box>
    <Box childrenProps={{ mb: 5 }}>
      <Textbox
        label="Text area Danger"
        id="textarea-DANGER"
        as="textarea"
        appearance="DANGER"
        placeholder="Danger"
      />
      <Textbox
        label="Text area Primary Danger"
        id="textarea-PRIMARY_DANGER"
        as="textarea"
        appearance="PRIMARY_DANGER"
        placeholder="Primary Danger"
      />
      <Textbox
        label="Text area Secondary Danger"
        id="textarea-SECONDARY_DANGER"
        as="textarea"
        appearance="SECONDARY_DANGER"
        placeholder="Secondary Danger"
      />
      <Textbox
        label="Text area Tertiary Danger"
        id="textarea-TERTIARY_DANGER"
        as="textarea"
        appearance="TERTIARY_DANGER"
        placeholder="Tertiary Danger"
      />
    </Box>
    <Box childrenProps={{ mb: 5 }}>
      <Textbox
        label="Text area Error"
        id="textarea-ERROR"
        as="textarea"
        appearance="ERROR"
        placeholder="Error"
      />
      <Textbox
        label="Text area Primary Error"
        id="textarea-PRIMARY_ERROR"
        as="textarea"
        appearance="PRIMARY_ERROR"
        placeholder="Primary Error"
      />
      <Textbox
        label="Text area Secondary Error"
        id="textarea-SECONDARY_ERROR"
        as="textarea"
        appearance="SECONDARY_ERROR"
        placeholder="Secondary Error"
      />
      <Textbox
        label="Text area Tertiary Error"
        id="textarea-TERTIARY_ERROR"
        as="textarea"
        appearance="TERTIARY_ERROR"
        placeholder="Tertiary Error"
      />
    </Box>
    <Box childrenProps={{ mb: 5 }}>
      <Textbox
        label="Text area Success"
        id="textarea-SUCCESS"
        as="textarea"
        appearance="SUCCESS"
        placeholder="Success"
      />
      <Textbox
        label="Text area Primary Success"
        id="textarea-PRIMARY_SUCCESS"
        as="textarea"
        appearance="PRIMARY_SUCCESS"
        placeholder="Primary Success"
      />
      <Textbox
        label="Text area Secondary Success"
        id="textarea-SECONDARY_SUCCESS"
        as="textarea"
        appearance="SECONDARY_SUCCESS"
        placeholder="Secondary Success"
      />
      <Textbox
        label="Text area Tertiary Success"
        id="textarea-TERTIARY_SUCCESS"
        as="textarea"
        appearance="TERTIARY_SUCCESS"
        placeholder="Tertiary Success"
      />
    </Box>
    <Box childrenProps={{ mb: 5 }}>
      <Textbox
        label="Text area Warning"
        id="textarea-WARNING"
        as="textarea"
        appearance="WARNING"
        placeholder="Warning"
      />
      <Textbox
        label="Text area Primary Warning"
        id="textarea-PRIMARY_WARNING"
        as="textarea"
        appearance="PRIMARY_WARNING"
        placeholder="Primary Warning"
      />
      <Textbox
        label="Text area Secondary Warning"
        id="textarea-SECONDARY_WARNING"
        as="textarea"
        appearance="SECONDARY_WARNING"
        placeholder="Secondary Warning"
      />
      <Textbox
        label="Text area Tertiary Warning"
        id="textarea-TERTIARY_WARNING"
        as="textarea"
        appearance="TERTIARY_WARNING"
        placeholder="Tertiary Warning"
      />
    </Box>
    <Box childrenProps={{ mb: 5 }}>
      <Textbox
        label="Text area Disabled"
        id="textarea-DISABLED"
        as="textarea"
        appearance="DISABLED"
        placeholder="Disabled"
      />
      <Textbox
        label="Text area Primary Disabled"
        id="textarea-PRIMARY_DISABLED"
        as="textarea"
        appearance="PRIMARY_DISABLED"
        placeholder="Primary Disabled"
      />
      <Textbox
        label="Text area Secondary Disabled"
        id="textarea-SECONDARY_DISABLED"
        as="textarea"
        appearance="SECONDARY_DISABLED"
        placeholder="Secondary Disabled"
      />
      <Textbox
        label="Text area Tertiary Disabled"
        id="textarea-TERTIARY_DISABLED"
        as="textarea"
        appearance="TERTIARY_DISABLED"
        placeholder="Tertiary Disabled"
      />
    </Box>
  </ThemeProvider>
)
