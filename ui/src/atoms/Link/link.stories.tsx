import React from 'react'

import { ThemeProvider } from '@redesign-system/ui-core'
import { Link } from '../Link'
import { Box } from '../Box'

export default {
  title: 'Components/Atoms/Link',
  component: Link,
}

export const Default = () => (
  <ThemeProvider>
    <Link href="#">Default</Link>
  </ThemeProvider>
)

export const Appearance = () => (
  <ThemeProvider>
    <Box childrenProps={{ m: 5 }}>
      <Link href="#" title="Primary" appearance="PRIMARY">
        Primary
      </Link>
      <Link href="#" title="Secondary" appearance="SECONDARY">
        Secondary
      </Link>
      <Link href="#" title="Tertiary" appearance="TERTIARY">
        Tertiary
      </Link>
    </Box>

    <Box childrenProps={{ m: 5 }}>
      <Link href="#" title="Accent" appearance="ACCENT">
        Accent
      </Link>
      <Link href="#" title="Primary Accent" appearance="PRIMARY_ACCENT">
        Primary Accent
      </Link>
      <Link href="#" title="Secondary Accent" appearance="SECONDARY_ACCENT">
        Secondary Accent
      </Link>
      <Link href="#" title="Tertiary Accent" appearance="TERTIARY_ACCENT">
        Tertiary Accent
      </Link>
    </Box>

    <Box childrenProps={{ m: 5 }}>
      <Link href="#" title="Active" appearance="ACTIVE">
        Active
      </Link>
      <Link href="#" title="Primary Active" appearance="PRIMARY_ACTIVE">
        Primary Active
      </Link>
      <Link href="#" title="Secondary Active" appearance="SECONDARY_ACTIVE">
        Secondary Active
      </Link>
      <Link href="#" title="Tertiary Active" appearance="TERTIARY_ACTIVE">
        Tertiary Active
      </Link>
    </Box>

    <Box childrenProps={{ m: 5 }}>
      <Link href="#" title="Action" appearance="ACTION">
        Action
      </Link>
      <Link href="#" title="Primary Action" appearance="PRIMARY_ACTION">
        Primary Action
      </Link>
      <Link href="#" title="Secondary Action" appearance="SECONDARY_ACTION">
        Secondary Action
      </Link>
      <Link href="#" title="Tertiary Action" appearance="TERTIARY_ACTION">
        Tertiary Action
      </Link>
    </Box>

    <Box childrenProps={{ m: 5 }}>
      <Link href="#" title="Danger" appearance="DANGER">
        Danger
      </Link>
      <Link href="#" title="Primary Danger<" appearance="PRIMARY_DANGER">
        Primary Danger
      </Link>
      <Link href="#" title="Secondary Danger" appearance="SECONDARY_DANGER">
        Secondary Danger
      </Link>
      <Link href="#" title="Tertiary Danger" appearance="TERTIARY_DANGER">
        Tertiary Danger
      </Link>
    </Box>

    <Box childrenProps={{ m: 5 }}>
      <Link href="#" title="Error" appearance="ERROR">
        Error
      </Link>
      <Link href="#" title="Primary Error" appearance="PRIMARY_ERROR">
        Primary Error
      </Link>
      <Link href="#" title="Secondary Error" appearance="SECONDARY_ERROR">
        Secondary Error
      </Link>
      <Link href="#" title="Tertiary Error" appearance="TERTIARY_ERROR">
        Tertiary Error
      </Link>
    </Box>

    <Box childrenProps={{ m: 5 }}>
      <Link href="#" title="Success" appearance="SUCCESS">
        Success
      </Link>
      <Link href="#" title="Primary Success" appearance="PRIMARY_SUCCESS">
        Primary Success
      </Link>
      <Link href="#" title="Secondary Success" appearance="SECONDARY_SUCCESS">
        Secondary Success
      </Link>
      <Link href="#" title="Tertiary Success" appearance="TERTIARY_SUCCESS">
        Tertiary Success
      </Link>
    </Box>

    <Box childrenProps={{ m: 5 }}>
      <Link href="#" title="Warning" appearance="WARNING">
        Warning
      </Link>
      <Link href="#" title="Primary Warning" appearance="PRIMARY_WARNING">
        Primary Warning
      </Link>
      <Link href="#" title="Secondary Warning<" appearance="SECONDARY_WARNING">
        Secondary Warning
      </Link>
      <Link href="#" title="Tertiary Warning" appearance="TERTIARY_WARNING">
        Tertiary Warning
      </Link>
    </Box>

    <Box childrenProps={{ m: 5 }}>
      <Link href="#" title="Disabled" appearance="DISABLED">
        Disabled
      </Link>
      <Link href="#" title="Primary Disabled" appearance="PRIMARY_DISABLED">
        Primary Disabled
      </Link>
      <Link href="#" title="Secondary Disabled" appearance="SECONDARY_DISABLED">
        Secondary Disabled
      </Link>
      <Link href="#" title="Tertiary Disabled" appearance="TERTIARY_DISABLED">
        Tertiary Disabled
      </Link>
    </Box>
  </ThemeProvider>
)
