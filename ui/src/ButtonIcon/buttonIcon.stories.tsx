import React from 'react'
import { ThemeProvider } from '@redesign-system/ui-core'
import { HomeIcon } from '@redesign-system/material-icons/HomeIcon'

import { ButtonIcon } from './ButtonIcon'
import { Box } from '../Box'

export default {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
}

export const Default = () => (
  <ThemeProvider>
    <ButtonIcon icon={HomeIcon} title="Home" alt="Home"></ButtonIcon>
  </ThemeProvider>
)

export const Appearance = () => (
  <ThemeProvider>
    <Box as="section" marginBottom={5}>
      <ButtonIcon
        appearance="PRIMARY"
        icon={HomeIcon}
        title="PRIMARY"
        marginRight={3}
        alt="Home"
      >
        Primary
      </ButtonIcon>
      <ButtonIcon
        appearance="SECONDARY"
        icon={HomeIcon}
        title="SECONDARY"
        marginRight={3}
        alt="Home"
      >
        Secondary
      </ButtonIcon>
      <ButtonIcon
        appearance="TERTIARY"
        icon={HomeIcon}
        title="TERTIARY"
        alt="Home"
      >
        Tertiary
      </ButtonIcon>
    </Box>

    <Box as="section" marginBottom={5}>
      <ButtonIcon
        appearance="ACCENT"
        icon={HomeIcon}
        title="ACCENT"
        marginRight={3}
        alt="Home"
      >
        Primary
      </ButtonIcon>
      <ButtonIcon
        appearance="SECONDARY_ACCENT"
        icon={HomeIcon}
        title="SECONDARY_ACCENT"
        marginRight={3}
        alt="Home"
      >
        Secondary
      </ButtonIcon>
      <ButtonIcon
        appearance="TERTIARY_ACCENT"
        icon={HomeIcon}
        title="TERTIARY_ACCENT"
        alt="Home"
      >
        Tertiary
      </ButtonIcon>
    </Box>

    <Box as="section" marginBottom={5} alt="Home">
      <ButtonIcon
        appearance="PRIMARY_ACTIVE"
        icon={HomeIcon}
        title="PRIMARY_ACTIVE"
        marginRight={3}
        alt="Home"
      >
        Primary
      </ButtonIcon>
      <ButtonIcon
        appearance="SECONDARY_ACTIVE"
        icon={HomeIcon}
        title="SECONDARY_ACTIVE"
        marginRight={3}
        alt="Home"
      >
        Secondary
      </ButtonIcon>
      <ButtonIcon
        appearance="TERTIARY_ACTIVE"
        icon={HomeIcon}
        title="TERTIARY_ACTIVE"
        alt="Home"
      >
        Tertiary
      </ButtonIcon>
    </Box>

    <Box as="section" marginBottom={5}>
      <ButtonIcon
        appearance="PRIMARY_ACTION"
        icon={HomeIcon}
        title="PRIMARY_ACTION"
        marginRight={3}
        alt="Home"
      >
        Primary
      </ButtonIcon>
      <ButtonIcon
        appearance="SECONDARY_ACTION"
        icon={HomeIcon}
        title="SECONDARY_ACTION"
        marginRight={3}
        alt="Home"
      >
        Secondary
      </ButtonIcon>
      <ButtonIcon
        appearance="TERTIARY_ACTION"
        icon={HomeIcon}
        title="TERTIARY_ACTION"
        alt="Home"
      >
        Tertiary
      </ButtonIcon>
    </Box>

    <Box as="section" marginBottom={5}>
      <ButtonIcon
        appearance="PRIMARY_DANGER"
        icon={HomeIcon}
        title="PRIMARY_DANGER"
        marginRight={3}
        alt="Home"
      >
        Primary
      </ButtonIcon>
      <ButtonIcon
        appearance="SECONDARY_DANGER"
        icon={HomeIcon}
        title="SECONDARY_DANGER"
        marginRight={3}
        alt="Home"
      >
        Secondary
      </ButtonIcon>
      <ButtonIcon
        appearance="TERTIARY_DANGER"
        icon={HomeIcon}
        title="TERTIARY_DANGER"
        alt="Home"
      >
        Tertiary
      </ButtonIcon>
    </Box>

    <Box as="section" marginBottom={5}>
      <ButtonIcon
        appearance="PRIMARY_DANGER"
        icon={HomeIcon}
        title="PRIMARY_DANGER"
        marginRight={3}
        alt="Home"
      >
        Primary
      </ButtonIcon>
      <ButtonIcon
        appearance="SECONDARY_DANGER"
        icon={HomeIcon}
        title="JSON"
        marginRight={3}
        alt="Home"
      >
        Secondary
      </ButtonIcon>
      <ButtonIcon
        appearance="TERTIARY_DANGER"
        icon={HomeIcon}
        title="TERTIARY_DANGER"
        alt="Home"
      >
        Tertiary
      </ButtonIcon>
    </Box>

    <Box as="section" marginBottom={5}>
      <ButtonIcon
        appearance="PRIMARY_SUCCESS"
        icon={HomeIcon}
        title="PRIMARY_SUCCESS"
        marginRight={3}
        alt="Home"
      >
        Primary
      </ButtonIcon>
      <ButtonIcon
        appearance="SECONDARY_SUCCESS"
        icon={HomeIcon}
        title="SECONDARY_SUCCESS"
        marginRight={3}
        alt="Home"
      >
        Secondary
      </ButtonIcon>
      <ButtonIcon
        appearance="TERTIARY_SUCCESS"
        icon={HomeIcon}
        title="TERTIARY_SUCCESS"
        alt="Home"
      >
        Tertiary
      </ButtonIcon>
    </Box>

    <Box as="section" marginBottom={5}>
      <ButtonIcon
        appearance="PRIMARY_WARNING"
        icon={HomeIcon}
        title="PRIMARY_WARNING"
        marginRight={3}
        alt="Home"
      >
        Primary
      </ButtonIcon>
      <ButtonIcon
        appearance="SECONDARY_WARNING"
        icon={HomeIcon}
        title="SECONDARY_WARNING"
        marginRight={3}
        alt="Home"
      >
        Secondary
      </ButtonIcon>
      <ButtonIcon
        appearance="TERTIARY_WARNING"
        icon={HomeIcon}
        title="TERTIARY_WARNING"
        alt="Home"
      >
        Tertiary
      </ButtonIcon>
    </Box>

    <Box as="section" marginBottom={5}>
      <ButtonIcon
        appearance="PRIMARY_DISABLED"
        icon={HomeIcon}
        title="PRIMARY_DISABLED"
        marginRight={3}
        alt="Home"
      >
        Primary
      </ButtonIcon>
      <ButtonIcon
        appearance="SECONDARY_DISABLED"
        icon={HomeIcon}
        title="SECONDARY_DISABLED"
        marginRight={3}
        alt="Home"
      >
        Secondary
      </ButtonIcon>
      <ButtonIcon
        appearance="TERTIARY_DISABLED"
        icon={HomeIcon}
        title="TERTIARY_DISABLED"
        alt="Home"
      >
        Tertiary
      </ButtonIcon>
    </Box>
  </ThemeProvider>
)
