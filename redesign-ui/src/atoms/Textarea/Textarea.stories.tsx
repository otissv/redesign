import React from 'react'

import { ThemeProvider } from '@redesign/ui-core'
import { Box } from '../Box'
import { Textarea } from './Textarea'

export default {
  title: 'Components/Atoms/Textarea',
  component: Textarea,
}

export const Default = () => (
  <ThemeProvider>
    <div>
      <Textarea id="textbox" placeholder="Textarea" />
    </div>
  </ThemeProvider>
)

export const Appearance = () => (
  <ThemeProvider>
    <Box matchProps={{ m: 5 }}>
      <Textarea id="textbox" widths={4} placeholder="Default" />
      <Textarea
        id="textbox"
        widths={4}
        appearance="PRIMARY"
        placeholder="Primary"
      />
      <Textarea
        id="textbox"
        widths={4}
        appearance="SECONDARY"
        placeholder="Secondary"
      />
      <Textarea
        id="textbox"
        widths={4}
        appearance="TERTIARY"
        placeholder="tertiary"
      />
    </Box>
    <Box matchProps={{ m: 5 }}>
      <Textarea
        id="textbox"
        widths={4}
        appearance="ACCENT"
        placeholder="Accent"
      />
      <Textarea
        id="textbox"
        widths={4}
        appearance="PRIMARY_ACCENT"
        placeholder="Primary Accent"
      />
      <Textarea
        id="textbox"
        widths={4}
        appearance="SECONDARY_ACCENT"
        placeholder="Secondary Accent"
      />
      <Textarea
        id="textbox"
        widths={4}
        appearance="TERTIARY_ACCENT"
        placeholder="tertiary Accent"
      />
    </Box>
    <Box matchProps={{ m: 5 }}>
      <Textarea
        id="textbox"
        widths={4}
        appearance="ACTIVE"
        placeholder="Active"
      />
      <Textarea
        id="textbox"
        widths={4}
        appearance="PRIMARY_ACTIVE"
        placeholder="Primary Active"
      />
      <Textarea
        id="textbox"
        widths={4}
        appearance="SECONDARY_ACTIVE"
        placeholder="Secondary Active"
      />
      <Textarea
        id="textbox"
        widths={4}
        appearance="TERTIARY_ACTIVE"
        placeholder="Tertiary Active"
      />
    </Box>
    <Box matchProps={{ m: 5 }}>
      <Textarea
        id="textbox"
        widths={4}
        appearance="ACTION"
        placeholder="Action"
      />
      <Textarea
        id="textbox"
        widths={4}
        appearance="PRIMARY_ACTION"
        placeholder="Primary Action"
      />
      <Textarea
        id="textbox"
        widths={4}
        appearance="SECONDARY_ACTION"
        placeholder="Secondary Action"
      />
      <Textarea
        id="textbox"
        widths={4}
        appearance="TERTIARY_ACTION"
        placeholder="Tertiary Action"
      />
    </Box>
    <Box matchProps={{ m: 5 }}>
      <Textarea
        id="textbox"
        widths={4}
        appearance="DANGER"
        placeholder="Danger"
      />
      <Textarea
        id="textbox"
        widths={4}
        appearance="PRIMARY_DANGER"
        placeholder="Primary Danger"
      />
      <Textarea
        id="textbox"
        widths={4}
        appearance="SECONDARY_DANGER"
        placeholder="Secondary Danger"
      />
      <Textarea
        id="textbox"
        widths={4}
        appearance="TERTIARY_DANGER"
        placeholder="Tertiary Danger"
      />
    </Box>
    <Box matchProps={{ m: 5 }}>
      <Textarea
        id="textbox"
        widths={4}
        appearance="ERROR"
        placeholder="Error"
      />
      <Textarea
        id="textbox"
        widths={4}
        appearance="PRIMARY_ERROR"
        placeholder="Primary Error"
      />
      <Textarea
        id="textbox"
        widths={4}
        appearance="SECONDARY_ERROR"
        placeholder="Secondary Error"
      />
      <Textarea
        id="textbox"
        widths={4}
        appearance="TERTIARY_ERROR"
        placeholder="Tertiary Error"
      />
    </Box>
    <Box matchProps={{ m: 5 }}>
      <Textarea
        id="textbox"
        widths={4}
        appearance="SUCCESS"
        placeholder="Success"
      />
      <Textarea
        id="textbox"
        widths={4}
        appearance="PRIMARY_SUCCESS"
        placeholder="Primary Success"
      />
      <Textarea
        id="textbox"
        widths={4}
        appearance="SECONDARY_SUCCESS"
        placeholder="Secondary Success"
      />
      <Textarea
        id="textbox"
        widths={4}
        appearance="TERTIARY_SUCCESS"
        placeholder="Tertiary Success"
      />
    </Box>
    <Box matchProps={{ m: 5 }}>
      <Textarea
        id="textbox"
        widths={4}
        appearance="WARNING"
        placeholder="Warning"
      />
      <Textarea
        id="textbox"
        widths={4}
        appearance="PRIMARY_WARNING"
        placeholder="Primary Warning"
      />
      <Textarea
        id="textbox"
        widths={4}
        appearance="SECONDARY_WARNING"
        placeholder="Secondary Warning"
      />
      <Textarea
        id="textbox"
        widths={4}
        appearance="TERTIARY_WARNING"
        placeholder="Tertiary Warning"
      />
    </Box>
    <Box matchProps={{ m: 5 }}>
      <Textarea
        id="textbox"
        widths={4}
        appearance="DISABLED"
        placeholder="Disabled"
      />
      <Textarea
        id="textbox"
        widths={4}
        appearance="PRIMARY_DISABLED"
        placeholder="Primary Disabled"
      />
      <Textarea
        id="textbox"
        widths={4}
        appearance="SECONDARY_DISABLED"
        placeholder="Secondary Disabled"
      />
      <Textarea
        id="textbox"
        widths={4}
        appearance="TERTIARY_DISABLED"
        placeholder="Tertiary Disabled"
      />
    </Box>
  </ThemeProvider>
)
