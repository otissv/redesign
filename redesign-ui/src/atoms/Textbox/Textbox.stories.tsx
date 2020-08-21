import React from 'react'

import { ThemeProvider } from '@redesign/ui-core'
import { Box } from '../Box'
import { Textbox } from './Textbox'

export default {
  title: 'Components/Atoms/Textbox',
  component: Textbox,
}

export const Default = () => (
  <ThemeProvider>
    <div>
      <Textbox id="textbox" placeholder="Textbox" />
    </div>
  </ThemeProvider>
)

export const Appearance = () => (
  <ThemeProvider>
    <Box matchProps={{ m: 5 }}>
      <Textbox id="Default" placeholder="Default" />
      <Textbox id="PRIMARY" appearance="PRIMARY" placeholder="Primary" />
      <Textbox id="SECONDARY" appearance="SECONDARY" placeholder="Secondary" />
      <Textbox id="TERTIARY" appearance="TERTIARY" placeholder="tertiary" />
    </Box>
    <Box matchProps={{ m: 5 }}>
      <Textbox id="ACCENT" appearance="ACCENT" placeholder="Accent" />
      <Textbox
        id="PRIMARY_ACCENT"
        appearance="PRIMARY_ACCENT"
        placeholder="Primary Accent"
      />
      <Textbox
        id="SECONDARY_ACCENT"
        appearance="SECONDARY_ACCENT"
        placeholder="Secondary Accent"
      />
      <Textbox
        id="TERTIARY_ACCENT"
        appearance="TERTIARY_ACCENT"
        placeholder="tertiary Accent"
      />
    </Box>
    <Box matchProps={{ m: 5 }}>
      <Textbox id="ACTIVE" appearance="ACTIVE" placeholder="Active" />
      <Textbox
        id="PRIMARY_ACTIVE"
        appearance="PRIMARY_ACTIVE"
        placeholder="Primary Active"
      />
      <Textbox
        id="SECONDARY_ACTIVE"
        appearance="SECONDARY_ACTIVE"
        placeholder="Secondary Active"
      />
      <Textbox
        id="TERTIARY_ACTIVE"
        appearance="TERTIARY_ACTIVE"
        placeholder="Tertiary Active"
      />
    </Box>
    <Box matchProps={{ m: 5 }}>
      <Textbox id="ACTION" appearance="ACTION" placeholder="Action" />
      <Textbox
        id="PRIMARY_ACTION"
        appearance="PRIMARY_ACTION"
        placeholder="Primary Action"
      />
      <Textbox
        id="SECONDARY_ACTION"
        appearance="SECONDARY_ACTION"
        placeholder="Secondary Action"
      />
      <Textbox
        id="TERTIARY_ACTION"
        appearance="TERTIARY_ACTION"
        placeholder="Tertiary Action"
      />
    </Box>
    <Box matchProps={{ m: 5 }}>
      <Textbox id="DANGER" appearance="DANGER" placeholder="Danger" />
      <Textbox
        id="PRIMARY_DANGER"
        appearance="PRIMARY_DANGER"
        placeholder="Primary Danger"
      />
      <Textbox
        id="SECONDARY_DANGER"
        appearance="SECONDARY_DANGER"
        placeholder="Secondary Danger"
      />
      <Textbox
        id="TERTIARY_DANGER"
        appearance="TERTIARY_DANGER"
        placeholder="Tertiary Danger"
      />
    </Box>
    <Box matchProps={{ m: 5 }}>
      <Textbox id="ERROR" appearance="ERROR" placeholder="Error" />
      <Textbox
        id="PRIMARY_ERROR"
        appearance="PRIMARY_ERROR"
        placeholder="Primary Error"
      />
      <Textbox
        id="SECONDARY_ERROR"
        appearance="SECONDARY_ERROR"
        placeholder="Secondary Error"
      />
      <Textbox
        id="TERTIARY_ERROR"
        appearance="TERTIARY_ERROR"
        placeholder="Tertiary Error"
      />
    </Box>
    <Box matchProps={{ m: 5 }}>
      <Textbox id="SUCCESS" appearance="SUCCESS" placeholder="Success" />
      <Textbox
        id="PRIMARY_SUCCESS"
        appearance="PRIMARY_SUCCESS"
        placeholder="Primary Success"
      />
      <Textbox
        id="SECONDARY_SUCCESS"
        appearance="SECONDARY_SUCCESS"
        placeholder="Secondary Success"
      />
      <Textbox
        id="TERTIARY_SUCCESS"
        appearance="TERTIARY_SUCCESS"
        placeholder="Tertiary Success"
      />
    </Box>
    <Box matchProps={{ m: 5 }}>
      <Textbox id="WARNING" appearance="WARNING" placeholder="Warning" />
      <Textbox
        id="PRIMARY_WARNING"
        appearance="PRIMARY_WARNING"
        placeholder="Primary Warning"
      />
      <Textbox
        id="SECONDARY_WARNING"
        appearance="SECONDARY_WARNING"
        placeholder="Secondary Warning"
      />
      <Textbox
        id="TERTIARY_WARNING"
        appearance="TERTIARY_WARNING"
        placeholder="Tertiary Warning"
      />
    </Box>
    <Box matchProps={{ m: 5 }}>
      <Textbox id="DISABLED" appearance="DISABLED" placeholder="Disabled" />
      <Textbox
        id="PRIMARY_DISABLED"
        appearance="PRIMARY_DISABLED"
        placeholder="Primary Disabled"
      />
      <Textbox
        id="SECONDARY_DISABLED"
        appearance="SECONDARY_DISABLED"
        placeholder="Secondary Disabled"
      />
      <Textbox
        id="TERTIARY_DISABLED"
        appearance="TERTIARY_DISABLED"
        placeholder="Tertiary Disabled"
      />
    </Box>
  </ThemeProvider>
)

export const Size = () => (
  <ThemeProvider>
    <Box matchProps={{ m: 5 }}>
      <Textbox id="size-1" size={1} placeholder="Size 1" />
      <Textbox id="size-2" size={2} placeholder="Size 2" />
      <Textbox id="size-3" size={3} placeholder="Size 3" />
      <Textbox id="size-4" size={4} placeholder="Size 4" />
      <Textbox id="size-5" size={5} placeholder="Size 5" />
      <Textbox id="size-6" size={6} placeholder="Size 6" />
      <Textbox id="size-7" size={7} placeholder="Size 7" />
      <Textbox id="size-8" size={8} placeholder="Size 8" />
      <Textbox id="size-9" size={9} placeholder="Size 9" />
      <Textbox id="size-10" size={10} placeholder="Size 10" />
      <Textbox id="size-11" size={11} placeholder="Size 11" />
      <Textbox id="size-12" size={12} placeholder="Size 12" />
    </Box>
  </ThemeProvider>
)

export const Widths = () => (
  <ThemeProvider>
    <Box matchProps={{ m: 5 }}>
      <Textbox id="width-1" widths={1} placeholder="widths 1" />
      <Textbox id="width-2" widths={2} placeholder="widths 2" />
      <Textbox id="width-3" widths={3} placeholder="widths 3" />
      <Textbox id="width-4" widths={4} placeholder="widths 4" />
      <Textbox id="width-5" widths={5} placeholder="widths 5" />
      <Textbox id="width-6" widths={6} placeholder="widths 6" />
      <Textbox id="width-7" widths={7} placeholder="widths 7" />
      <Textbox id="width-8" widths={8} placeholder="widths 8" />
      <Textbox id="width-9" widths={9} placeholder="widths 9" />
      <Textbox id="width-10" widths={10} placeholder="widths 10" />
    </Box>
  </ThemeProvider>
)

export const Textarea = () => (
  <ThemeProvider>
    <Box matchProps={{ m: 5 }}>
      <Textbox
        id="textarea-Default"
        as="Textarea"
        widths={4}
        placeholder="Default"
      />
      <Textbox
        id="textarea-PRIMARY"
        as="Textarea"
        widths={4}
        appearance="PRIMARY"
        placeholder="Primary"
      />
      <Textbox
        id="textarea-SECONDARY"
        as="Textarea"
        widths={4}
        appearance="SECONDARY"
        placeholder="Secondary"
      />
      <Textbox
        id="textarea-TERTIARY"
        as="Textarea"
        widths={4}
        appearance="TERTIARY"
        placeholder="tertiary"
      />
    </Box>
    <Box matchProps={{ m: 5 }}>
      <Textbox
        id="textarea-ACCENT"
        as="Textarea"
        widths={4}
        appearance="ACCENT"
        placeholder="Accent"
      />
      <Textbox
        id="textarea-PRIMARY_ACCENT"
        as="Textarea"
        widths={4}
        appearance="PRIMARY_ACCENT"
        placeholder="Primary Accent"
      />
      <Textbox
        id="textarea-SECONDARY_ACCENT"
        as="Textarea"
        widths={4}
        appearance="SECONDARY_ACCENT"
        placeholder="Secondary Accent"
      />
      <Textbox
        id="textarea-TERTIARY_ACCENT"
        as="Textarea"
        widths={4}
        appearance="TERTIARY_ACCENT"
        placeholder="tertiary Accent"
      />
    </Box>
    <Box matchProps={{ m: 5 }}>
      <Textbox
        id="textarea-ACTIVE"
        as="Textarea"
        widths={4}
        appearance="ACTIVE"
        placeholder="Active"
      />
      <Textbox
        id="textarea-PRIMARY_ACTIVE"
        as="Textarea"
        widths={4}
        appearance="PRIMARY_ACTIVE"
        placeholder="Primary Active"
      />
      <Textbox
        id="textarea-SECONDARY_ACTIVE"
        as="Textarea"
        widths={4}
        appearance="SECONDARY_ACTIVE"
        placeholder="Secondary Active"
      />
      <Textbox
        id="textarea-TERTIARY_ACTIVE"
        as="Textarea"
        widths={4}
        appearance="TERTIARY_ACTIVE"
        placeholder="Tertiary Active"
      />
    </Box>
    <Box matchProps={{ m: 5 }}>
      <Textbox
        id="textarea-ACTION"
        as="Textarea"
        widths={4}
        appearance="ACTION"
        placeholder="Action"
      />
      <Textbox
        id="textarea-PRIMARY_ACTION"
        as="Textarea"
        widths={4}
        appearance="PRIMARY_ACTION"
        placeholder="Primary Action"
      />
      <Textbox
        id="textarea-SECONDARY_ACTION"
        as="Textarea"
        widths={4}
        appearance="SECONDARY_ACTION"
        placeholder="Secondary Action"
      />
      <Textbox
        id="textarea-TERTIARY_ACTION"
        as="Textarea"
        widths={4}
        appearance="TERTIARY_ACTION"
        placeholder="Tertiary Action"
      />
    </Box>
    <Box matchProps={{ m: 5 }}>
      <Textbox
        id="textarea-DANGER"
        as="Textarea"
        widths={4}
        appearance="DANGER"
        placeholder="Danger"
      />
      <Textbox
        id="textarea-PRIMARY_DANGER"
        as="Textarea"
        widths={4}
        appearance="PRIMARY_DANGER"
        placeholder="Primary Danger"
      />
      <Textbox
        id="textarea-SECONDARY_DANGER"
        as="Textarea"
        widths={4}
        appearance="SECONDARY_DANGER"
        placeholder="Secondary Danger"
      />
      <Textbox
        id="textarea-TERTIARY_DANGER"
        as="Textarea"
        widths={4}
        appearance="TERTIARY_DANGER"
        placeholder="Tertiary Danger"
      />
    </Box>
    <Box matchProps={{ m: 5 }}>
      <Textbox
        id="textarea-ERROR"
        as="Textarea"
        widths={4}
        appearance="ERROR"
        placeholder="Error"
      />
      <Textbox
        id="textarea-PRIMARY_ERROR"
        as="Textarea"
        widths={4}
        appearance="PRIMARY_ERROR"
        placeholder="Primary Error"
      />
      <Textbox
        id="textarea-SECONDARY_ERROR"
        as="Textarea"
        widths={4}
        appearance="SECONDARY_ERROR"
        placeholder="Secondary Error"
      />
      <Textbox
        id="textarea-TERTIARY_ERROR"
        as="Textarea"
        widths={4}
        appearance="TERTIARY_ERROR"
        placeholder="Tertiary Error"
      />
    </Box>
    <Box matchProps={{ m: 5 }}>
      <Textbox
        id="textarea-SUCCESS"
        as="Textarea"
        widths={4}
        appearance="SUCCESS"
        placeholder="Success"
      />
      <Textbox
        id="textarea-PRIMARY_SUCCESS"
        as="Textarea"
        widths={4}
        appearance="PRIMARY_SUCCESS"
        placeholder="Primary Success"
      />
      <Textbox
        id="textarea-SECONDARY_SUCCESS"
        as="Textarea"
        widths={4}
        appearance="SECONDARY_SUCCESS"
        placeholder="Secondary Success"
      />
      <Textbox
        id="textarea-TERTIARY_SUCCESS"
        as="Textarea"
        widths={4}
        appearance="TERTIARY_SUCCESS"
        placeholder="Tertiary Success"
      />
    </Box>
    <Box matchProps={{ m: 5 }}>
      <Textbox
        id="textarea-WARNING"
        as="Textarea"
        widths={4}
        appearance="WARNING"
        placeholder="Warning"
      />
      <Textbox
        id="textarea-PRIMARY_WARNING"
        as="Textarea"
        widths={4}
        appearance="PRIMARY_WARNING"
        placeholder="Primary Warning"
      />
      <Textbox
        id="textarea-SECONDARY_WARNING"
        as="Textarea"
        widths={4}
        appearance="SECONDARY_WARNING"
        placeholder="Secondary Warning"
      />
      <Textbox
        id="textarea-TERTIARY_WARNING"
        as="Textarea"
        widths={4}
        appearance="TERTIARY_WARNING"
        placeholder="Tertiary Warning"
      />
    </Box>
    <Box matchProps={{ m: 5 }}>
      <Textbox
        id="textarea-DISABLED"
        as="Textarea"
        widths={4}
        appearance="DISABLED"
        placeholder="Disabled"
      />
      <Textbox
        id="textarea-PRIMARY_DISABLED"
        as="Textarea"
        widths={4}
        appearance="PRIMARY_DISABLED"
        placeholder="Primary Disabled"
      />
      <Textbox
        id="textarea-SECONDARY_DISABLED"
        as="Textarea"
        widths={4}
        appearance="SECONDARY_DISABLED"
        placeholder="Secondary Disabled"
      />
      <Textbox
        id="textarea-TERTIARY_DISABLED"
        as="Textarea"
        widths={4}
        appearance="TERTIARY_DISABLED"
        placeholder="Tertiary Disabled"
      />
    </Box>
  </ThemeProvider>
)
