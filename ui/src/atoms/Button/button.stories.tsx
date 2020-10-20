import React from 'react'

import { ThemeProvider } from '@redesign-system/ui-core'
import { Box } from '../Box'
import { Button } from './Button'

export default {
  title: 'Components/Atoms/Button',
  component: Button,
}

export const Default = () => (
  <ThemeProvider>
    <Button title="Default">Default</Button>
  </ThemeProvider>
)

export const Appearance = () => (
  <ThemeProvider>
    <Box childrenProps={{ m: 5 }}>
      <Button title="Primary" appearance="PRIMARY">
        Primary
      </Button>
      <Button title="Secondary" appearance="SECONDARY">
        Secondary
      </Button>
      <Button title="Tertiary" appearance="TERTIARY">
        Tertiary
      </Button>
    </Box>

    <Box childrenProps={{ m: 5 }}>
      <Button title="Accent" appearance="ACCENT">
        Accent
      </Button>
      <Button title="Primary Accent" appearance="PRIMARY_ACCENT">
        Primary Accent
      </Button>
      <Button title="Secondary Accent" appearance="SECONDARY_ACCENT">
        Secondary Accent
      </Button>
      <Button title="Tertiary Accent" appearance="TERTIARY_ACCENT">
        Tertiary Accent
      </Button>
    </Box>

    <Box childrenProps={{ m: 5 }}>
      <Button title="Active" appearance="ACTIVE">
        Active
      </Button>
      <Button title="Primary Active" appearance="PRIMARY_ACTIVE">
        Primary Active
      </Button>
      <Button title="Secondary Active" appearance="SECONDARY_ACTIVE">
        Secondary Active
      </Button>
      <Button title="Tertiary Active" appearance="TERTIARY_ACTIVE">
        Tertiary Active
      </Button>
    </Box>

    <Box childrenProps={{ m: 5 }}>
      <Button title="Action" appearance="ACTION">
        Action
      </Button>
      <Button title="Primary Action" appearance="PRIMARY_ACTION">
        Primary Action
      </Button>
      <Button title="Secondary Action" appearance="SECONDARY_ACTION">
        Secondary Action
      </Button>
      <Button title="Tertiary Action" appearance="TERTIARY_ACTION">
        Tertiary Action
      </Button>
    </Box>

    <Box childrenProps={{ m: 5 }}>
      <Button title="Danger" appearance="DANGER">
        Danger
      </Button>
      <Button title="Primary Danger<" appearance="PRIMARY_DANGER">
        Primary Danger
      </Button>
      <Button title="Secondary Danger" appearance="SECONDARY_DANGER">
        Secondary Danger
      </Button>
      <Button title="Tertiary Danger" appearance="TERTIARY_DANGER">
        Tertiary Danger
      </Button>
    </Box>

    <Box childrenProps={{ m: 5 }}>
      <Button title="Error" appearance="ERROR">
        Error
      </Button>
      <Button title="Primary Error" appearance="PRIMARY_ERROR">
        Primary Error
      </Button>
      <Button title="Secondary Error" appearance="SECONDARY_ERROR">
        Secondary Error
      </Button>
      <Button title="Tertiary Error" appearance="TERTIARY_ERROR">
        Tertiary Error
      </Button>
    </Box>

    <Box childrenProps={{ m: 5 }}>
      <Button title="Success" appearance="SUCCESS">
        Success
      </Button>
      <Button title="Primary Success" appearance="PRIMARY_SUCCESS">
        Primary Success
      </Button>
      <Button title="Secondary Success" appearance="SECONDARY_SUCCESS">
        Secondary Success
      </Button>
      <Button title="Tertiary Success" appearance="TERTIARY_SUCCESS">
        Tertiary Success
      </Button>
    </Box>

    <Box childrenProps={{ m: 5 }}>
      <Button title="Warning" appearance="WARNING">
        Warning
      </Button>
      <Button title="Primary Warning" appearance="PRIMARY_WARNING">
        Primary Warning
      </Button>
      <Button title="Secondary Warning<" appearance="SECONDARY_WARNING">
        Secondary Warning
      </Button>
      <Button title="Tertiary Warning" appearance="TERTIARY_WARNING">
        Tertiary Warning
      </Button>
    </Box>

    <Box childrenProps={{ m: 5 }}>
      <Button title="Disabled" appearance="DISABLED">
        Disabled
      </Button>
      <Button title="Primary Disabled" appearance="PRIMARY_DISABLED">
        Primary Disabled
      </Button>
      <Button title="Secondary Disabled" appearance="SECONDARY_DISABLED">
        Secondary Disabled
      </Button>
      <Button title="Tertiary Disabled" appearance="TERTIARY_DISABLED">
        Tertiary Disabled
      </Button>
    </Box>
  </ThemeProvider>
)

export const Size = () => (
  <ThemeProvider>
    <Box childrenProps={{ m: 5 }}>
      <Button size={1}>Size 1</Button>
      <Button size={2}>Size 2</Button>
      <Button size={3}>Size 3</Button>
      <Button size={4}>Size 4</Button>
      <Button size={5}>Size 5</Button>
      <Button size={6}>Size 6</Button>
      <Button size={7}>Size 7</Button>
      <Button size={8}>Size 8</Button>
      <Button size={9}>Size 9</Button>
      <Button size={10}>Size 10</Button>
    </Box>
  </ThemeProvider>
)

export const Stretch = () => (
  <ThemeProvider>
    <Button stretch>Button</Button>
  </ThemeProvider>
)
