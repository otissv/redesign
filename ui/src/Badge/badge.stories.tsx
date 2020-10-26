import React from 'react'
import { ThemeProvider } from '@redesign-system/ui-core'

import { Badge } from './Badge'
import { Box } from '../Box'

export default {
  title: 'Components/Badge',
  component: Badge,
}

export const Default = () => (
  <ThemeProvider>
    <Badge>Badge</Badge>
  </ThemeProvider>
)

export const Appearance = () => (
  <ThemeProvider>
    <Box childrenProps={{ m: 1 }}>
      <Badge appearance="PRIMARY">Primary</Badge>
      <Badge appearance="SECONDARY">Secondary</Badge>
      <Badge appearance="TERTIARY">Tertiary</Badge>
    </Box>
    <Box childrenProps={{ m: 1 }}>
      <Badge appearance="ACCENT">Accent</Badge>
      <Badge appearance="PRIMARY_ACCENT">Primary Accent</Badge>
      <Badge appearance="SECONDARY_ACCENT">Secondary Accent</Badge>
      <Badge appearance="TERTIARY_ACCENT">Tertiary Accent</Badge>
    </Box>
    <Box childrenProps={{ m: 1 }}>
      <Badge appearance="ACTION">Action</Badge>
      <Badge appearance="PRIMARY_ACTION">Primary Action</Badge>
      <Badge appearance="SECONDARY_ACTION">Secondary Action</Badge>
      <Badge appearance="TERTIARY_ACTION">Tertiary Action</Badge>
    </Box>
    <Box childrenProps={{ m: 1 }}>
      <Badge appearance="DANGER">Danger</Badge>
      <Badge appearance="PRIMARY_DANGER">Primary Danger</Badge>
      <Badge appearance="SECONDARY_DANGER">Secondary Danger</Badge>
      <Badge appearance="TERTIARY_DANGER">Tertiary Danger</Badge>
    </Box>
    <Box childrenProps={{ m: 1 }}>
      <Badge appearance="ERROR">Error</Badge>
      <Badge appearance="PRIMARY_ERROR">Primary Error</Badge>
      <Badge appearance="SECONDARY_ERROR">Secondary Error</Badge>
      <Badge appearance="TERTIARY_ERROR">Tertiary Error</Badge>
    </Box>
    <Box childrenProps={{ m: 1 }}>
      <Badge appearance="SUCCESS">Success</Badge>
      <Badge appearance="PRIMARY_SUCCESS">Primary Success</Badge>
      <Badge appearance="SECONDARY_SUCCESS">Secondary Success</Badge>
      <Badge appearance="TERTIARY_SUCCESS">Tertiary Success</Badge>
    </Box>
    <Box childrenProps={{ m: 1 }}>
      <Badge appearance="WARNING">Warning</Badge>
      <Badge appearance="PRIMARY_WARNING">Primary Warning</Badge>
      <Badge appearance="SECONDARY_WARNING">Secondary Warning</Badge>
      <Badge appearance="TERTIARY_WARNING">Tertiary Warning</Badge>
    </Box>
    <Box childrenProps={{ m: 1 }}>
      <Badge appearance="DISABLED">Disabled</Badge>
      <Badge appearance="PRIMARY_DISABLED">Primary Disabled</Badge>
      <Badge appearance="SECONDARY_DISABLED">Secondary Disabled</Badge>
      <Badge appearance="TERTIARY_DISABLED">Tertiary Disabled</Badge>
    </Box>
  </ThemeProvider>
)

export const Pills = () => (
  <ThemeProvider>
    <Box childrenProps={{ m: 1 }}>
      <Badge pill appearance="PRIMARY">
        Primary
      </Badge>
      <Badge pill appearance="SECONDARY">
        Secondary
      </Badge>
      <Badge pill appearance="TERTIARY">
        Tertiary
      </Badge>
    </Box>
    <Box childrenProps={{ m: 1 }}>
      <Badge pill appearance="ACCENT">
        Accent
      </Badge>
      <Badge pill appearance="PRIMARY_ACCENT">
        Primary Accent
      </Badge>
      <Badge pill appearance="SECONDARY_ACCENT">
        Secondary Accent
      </Badge>
      <Badge pill appearance="TERTIARY_ACCENT">
        Tertiary Accent
      </Badge>
    </Box>
    <Box childrenProps={{ m: 1 }}>
      <Badge pill appearance="ACTION">
        Action
      </Badge>
      <Badge pill appearance="PRIMARY_ACTION">
        Primary Action
      </Badge>
      <Badge pill appearance="SECONDARY_ACTION">
        Secondary Action
      </Badge>
      <Badge pill appearance="TERTIARY_ACTION">
        Tertiary Action
      </Badge>
    </Box>
    <Box childrenProps={{ m: 1 }}>
      <Badge pill appearance="DANGER">
        Danger
      </Badge>
      <Badge pill appearance="PRIMARY_DANGER">
        Primary Danger
      </Badge>
      <Badge pill appearance="SECONDARY_DANGER">
        Secondary Danger
      </Badge>
      <Badge pill appearance="TERTIARY_DANGER">
        Tertiary Danger
      </Badge>
    </Box>
    <Box childrenProps={{ m: 1 }}>
      <Badge pill appearance="ERROR">
        Error
      </Badge>
      <Badge pill appearance="PRIMARY_ERROR">
        Primary Error
      </Badge>
      <Badge pill appearance="SECONDARY_ERROR">
        Secondary Error
      </Badge>
      <Badge pill appearance="TERTIARY_ERROR">
        Tertiary Error
      </Badge>
    </Box>
    <Box childrenProps={{ m: 1 }}>
      <Badge pill appearance="SUCCESS">
        Success
      </Badge>
      <Badge pill appearance="PRIMARY_SUCCESS">
        Primary Success
      </Badge>
      <Badge pill appearance="SECONDARY_SUCCESS">
        Secondary Success
      </Badge>
      <Badge pill appearance="TERTIARY_SUCCESS">
        Tertiary Success
      </Badge>
    </Box>
    <Box childrenProps={{ m: 1 }}>
      <Badge pill appearance="WARNING">
        Warning
      </Badge>
      <Badge pill appearance="PRIMARY_WARNING">
        Primary Warning
      </Badge>
      <Badge pill appearance="SECONDARY_WARNING">
        Secondary Warning
      </Badge>
      <Badge pill appearance="TERTIARY_WARNING">
        Tertiary Warning
      </Badge>
    </Box>
    <Box childrenProps={{ m: 1 }}>
      <Badge pill appearance="DISABLED">
        Disabled
      </Badge>
      <Badge pill appearance="PRIMARY_DISABLED">
        Primary Disabled
      </Badge>
      <Badge pill appearance="SECONDARY_DISABLED">
        Secondary Disabled
      </Badge>
      <Badge pill appearance="TERTIARY_DISABLED">
        Tertiary Disabled
      </Badge>
    </Box>
  </ThemeProvider>
)
