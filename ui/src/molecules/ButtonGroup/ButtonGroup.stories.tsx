import React from 'react'
import { HomeIcon } from '@redesign-system/material-icons/HomeIcon'
import { ContentCopyIcon } from '@redesign-system/material-icons/ContentCopyIcon'
import { DeleteAlertIcon } from '@redesign-system/material-icons/DeleteAlertIcon'

import { ButtonGroupButton } from './ButtonGroupButton'
import { ButtonGroup } from './ButtonGroup'
import { ThemeProvider } from '@redesign-system/ui-core'
import { ButtonGroupButtonIcon } from './ButtonGroupButtonIcon'
import { Box } from '../../atoms/Box'
import { useString } from '../../hooks/useString'

export default {
  title: 'Components/Molecules/ButtonGroup',
  component: ButtonGroup,
}

export const Default = () => {
  return (
    <ThemeProvider>
      <ButtonGroup>
        <ButtonGroupButton id="d1" title="Default 1">
          Default
        </ButtonGroupButton>
        <ButtonGroupButton id="d2" title="Default 2">
          Default
        </ButtonGroupButton>
        <ButtonGroupButton id="d3" title="Default 3">
          Default
        </ButtonGroupButton>
      </ButtonGroup>
    </ThemeProvider>
  )
}

export const Active = () => {
  const { string: active, onClick } = useString('1')

  return (
    <ThemeProvider>
      <Box>
        <ButtonGroup>
          <ButtonGroupButton id="1" onClick={onClick} active={active == '1'}>
            Primary
          </ButtonGroupButton>
          <ButtonGroupButton id="2" onClick={onClick} active={active == '2'}>
            Primary
          </ButtonGroupButton>
          <ButtonGroupButton id="3" onClick={onClick} active={active == '3'}>
            Primary
          </ButtonGroupButton>
        </ButtonGroup>
      </Box>
    </ThemeProvider>
  )
}

export const Appearance = () => (
  <ThemeProvider>
    <Box childrenProps={{ m: 2 }}>
      <ButtonGroup>
        <ButtonGroupButton appearance="PRIMARY">Primary</ButtonGroupButton>
        <ButtonGroupButton appearance="PRIMARY">Primary</ButtonGroupButton>
        <ButtonGroupButton appearance="PRIMARY">Primary</ButtonGroupButton>
      </ButtonGroup>
    </Box>
    <Box childrenProps={{ m: 2 }}>
      <ButtonGroup>
        <ButtonGroupButton appearance="SECONDARY">Secondary</ButtonGroupButton>
        <ButtonGroupButton appearance="SECONDARY">Secondary</ButtonGroupButton>
        <ButtonGroupButton appearance="SECONDARY">
          SeconSecondaryday
        </ButtonGroupButton>
      </ButtonGroup>
    </Box>
    <Box childrenProps={{ m: 2 }}>
      <ButtonGroup>
        <ButtonGroupButton appearance="TERTIARY">Tertiary</ButtonGroupButton>
        <ButtonGroupButton appearance="TERTIARY">Tertiary</ButtonGroupButton>
        <ButtonGroupButton appearance="TERTIARY">Tertiary</ButtonGroupButton>
      </ButtonGroup>
    </Box>
    <Box childrenProps={{ m: 2 }}>
      <ButtonGroup>
        <ButtonGroupButton appearance="PRIMARY_ACCENT">
          Primary
        </ButtonGroupButton>
        <ButtonGroupButton appearance="PRIMARY_ACCENT">
          Primary
        </ButtonGroupButton>
        <ButtonGroupButton appearance="PRIMARY_ACCENT">
          Primary
        </ButtonGroupButton>
      </ButtonGroup>
    </Box>
    <Box childrenProps={{ m: 2 }}>
      <ButtonGroup>
        <ButtonGroupButton appearance="SECONDARY_ACCENT">
          Secondary
        </ButtonGroupButton>
        <ButtonGroupButton appearance="SECONDARY_ACCENT">
          Secondary
        </ButtonGroupButton>
        <ButtonGroupButton appearance="SECONDARY_ACCENT">
          Secondary
        </ButtonGroupButton>
      </ButtonGroup>
    </Box>
    <Box childrenProps={{ m: 2 }}>
      <ButtonGroup>
        <ButtonGroupButton appearance="TERTIARY_ACCENT">
          Tertiary
        </ButtonGroupButton>
        <ButtonGroupButton appearance="TERTIARY_ACCENT">
          Tertiary
        </ButtonGroupButton>
        <ButtonGroupButton appearance="TERTIARY_ACCENT">
          Tertiary
        </ButtonGroupButton>
      </ButtonGroup>
    </Box>
    <Box childrenProps={{ m: 2 }}>
      <ButtonGroup>
        <ButtonGroupButton appearance="PRIMARY_ACTIVE">
          Primary
        </ButtonGroupButton>
        <ButtonGroupButton appearance="PRIMARY_ACTIVE">
          Primary
        </ButtonGroupButton>
        <ButtonGroupButton appearance="PRIMARY_ACTIVE">
          Primary
        </ButtonGroupButton>
      </ButtonGroup>
    </Box>
    <Box childrenProps={{ m: 2 }}>
      <ButtonGroup>
        <ButtonGroupButton appearance="SECONDARY_ACTIVE">
          Seconday
        </ButtonGroupButton>
        <ButtonGroupButton appearance="SECONDARY_ACTIVE">
          Seconday
        </ButtonGroupButton>
        <ButtonGroupButton appearance="SECONDARY_ACTIVE">
          Seconday
        </ButtonGroupButton>
      </ButtonGroup>
    </Box>
    <Box childrenProps={{ m: 2 }}>
      <ButtonGroup>
        <ButtonGroupButton appearance="TERTIARY_ACTIVE">
          Tertiary
        </ButtonGroupButton>
        <ButtonGroupButton appearance="TERTIARY_ACTIVE">
          Tertiary
        </ButtonGroupButton>
        <ButtonGroupButton appearance="TERTIARY_ACTIVE">
          Tertiary
        </ButtonGroupButton>
      </ButtonGroup>
    </Box>
    <Box childrenProps={{ m: 2 }}>
      <ButtonGroup>
        <ButtonGroupButton appearance="PRIMARY_ACTION">
          Primary
        </ButtonGroupButton>
        <ButtonGroupButton appearance="PRIMARY_ACTION">
          Primary
        </ButtonGroupButton>
        <ButtonGroupButton appearance="PRIMARY_ACTION">
          Primary
        </ButtonGroupButton>
      </ButtonGroup>
    </Box>
    <Box childrenProps={{ m: 2 }}>
      <ButtonGroup>
        <ButtonGroupButton appearance="SECONDARY_ACTION">
          Seconday
        </ButtonGroupButton>
        <ButtonGroupButton appearance="SECONDARY_ACTION">
          Seconday
        </ButtonGroupButton>
        <ButtonGroupButton appearance="SECONDARY_ACTION">
          Seconday
        </ButtonGroupButton>
      </ButtonGroup>
    </Box>
    <Box childrenProps={{ m: 2 }}>
      <ButtonGroup>
        <ButtonGroupButton appearance="TERTIARY_ACTION">
          Tertiary
        </ButtonGroupButton>
        <ButtonGroupButton appearance="TERTIARY_ACTION">
          Tertiary
        </ButtonGroupButton>
        <ButtonGroupButton appearance="TERTIARY_ACTION">
          Tertiary
        </ButtonGroupButton>
      </ButtonGroup>
    </Box>
    <Box childrenProps={{ m: 2 }}>
      <ButtonGroup>
        <ButtonGroupButton appearance="PRIMARY_DANGER">
          Primary
        </ButtonGroupButton>
        <ButtonGroupButton appearance="PRIMARY_DANGER">
          Primary
        </ButtonGroupButton>
        <ButtonGroupButton appearance="PRIMARY_DANGER">
          Primary
        </ButtonGroupButton>
      </ButtonGroup>
    </Box>
    <Box childrenProps={{ m: 2 }}>
      <ButtonGroup>
        <ButtonGroupButton appearance="SECONDARY_DANGER">
          Seconday
        </ButtonGroupButton>
        <ButtonGroupButton appearance="SECONDARY_DANGER">
          Seconday
        </ButtonGroupButton>
        <ButtonGroupButton appearance="SECONDARY_DANGER">
          Seconday
        </ButtonGroupButton>
      </ButtonGroup>
    </Box>
    <Box childrenProps={{ m: 2 }}>
      <ButtonGroup>
        <ButtonGroupButton appearance="TERTIARY_DANGER">
          Tertiary
        </ButtonGroupButton>
        <ButtonGroupButton appearance="TERTIARY_DANGER">
          Tertiary
        </ButtonGroupButton>
        <ButtonGroupButton appearance="TERTIARY_DANGER">
          Tertiary
        </ButtonGroupButton>
      </ButtonGroup>
    </Box>
    <Box childrenProps={{ m: 2 }}>
      <ButtonGroup>
        <ButtonGroupButton appearance="PRIMARY_SUCCESS">
          Primary
        </ButtonGroupButton>
        <ButtonGroupButton appearance="PRIMARY_SUCCESS">
          Primary
        </ButtonGroupButton>
        <ButtonGroupButton appearance="PRIMARY_SUCCESS">
          Primary
        </ButtonGroupButton>
      </ButtonGroup>
    </Box>
    <Box childrenProps={{ m: 2 }}>
      <ButtonGroup>
        <ButtonGroupButton appearance="SECONDARY_SUCCESS">
          Seconday
        </ButtonGroupButton>
        <ButtonGroupButton appearance="SECONDARY_SUCCESS">
          Seconday
        </ButtonGroupButton>
        <ButtonGroupButton appearance="SECONDARY_SUCCESS">
          Seconday
        </ButtonGroupButton>
      </ButtonGroup>
    </Box>
    <Box childrenProps={{ m: 2 }}>
      <ButtonGroup>
        <ButtonGroupButton appearance="TERTIARY_SUCCESS">
          Tertiary
        </ButtonGroupButton>
        <ButtonGroupButton appearance="TERTIARY_SUCCESS">
          Tertiary
        </ButtonGroupButton>
        <ButtonGroupButton appearance="TERTIARY_SUCCESS">
          Tertiary
        </ButtonGroupButton>
      </ButtonGroup>
    </Box>
    <Box childrenProps={{ m: 2 }}>
      <ButtonGroup>
        <ButtonGroupButton appearance="PRIMARY_WARNING">
          Primary
        </ButtonGroupButton>
        <ButtonGroupButton appearance="PRIMARY_WARNING">
          Primary
        </ButtonGroupButton>
        <ButtonGroupButton appearance="PRIMARY_WARNING">
          Primary
        </ButtonGroupButton>
      </ButtonGroup>
    </Box>
    <Box childrenProps={{ m: 2 }}>
      <ButtonGroup>
        <ButtonGroupButton appearance="SECONDARY_WARNING">
          Seconday
        </ButtonGroupButton>
        <ButtonGroupButton appearance="SECONDARY_WARNING">
          Seconday
        </ButtonGroupButton>
        <ButtonGroupButton appearance="SECONDARY_WARNING">
          Seconday
        </ButtonGroupButton>
      </ButtonGroup>
    </Box>
    <Box childrenProps={{ m: 2 }}>
      <ButtonGroup>
        <ButtonGroupButton appearance="TERTIARY_WARNING">
          Tertiary
        </ButtonGroupButton>
        <ButtonGroupButton appearance="TERTIARY_WARNING">
          Tertiary
        </ButtonGroupButton>
        <ButtonGroupButton appearance="TERTIARY_WARNING">
          Tertiary
        </ButtonGroupButton>
      </ButtonGroup>
    </Box>
    <Box childrenProps={{ m: 2 }}>
      <ButtonGroup>
        <ButtonGroupButton appearance="PRIMARY_DISABLED">
          Primary
        </ButtonGroupButton>
        <ButtonGroupButton appearance="PRIMARY_DISABLED">
          Primary
        </ButtonGroupButton>
        <ButtonGroupButton appearance="PRIMARY_DISABLED">
          Primary
        </ButtonGroupButton>
      </ButtonGroup>
    </Box>
    <Box childrenProps={{ m: 2 }}>
      <ButtonGroup>
        <ButtonGroupButton appearance="SECONDARY_DISABLED">
          Seconday
        </ButtonGroupButton>
        <ButtonGroupButton appearance="SECONDARY_DISABLED">
          Seconday
        </ButtonGroupButton>
        <ButtonGroupButton appearance="SECONDARY_DISABLED">
          Seconday
        </ButtonGroupButton>
      </ButtonGroup>
    </Box>
    <Box childrenProps={{ m: 2 }}>
      <ButtonGroup>
        <ButtonGroupButton appearance="TERTIARY_DISABLED">
          Tertiary
        </ButtonGroupButton>
        <ButtonGroupButton appearance="TERTIARY_DISABLED">
          Tertiary
        </ButtonGroupButton>
        <ButtonGroupButton appearance="TERTIARY_DISABLED">
          Tertiary
        </ButtonGroupButton>
      </ButtonGroup>
    </Box>
  </ThemeProvider>
)

export const Size = () => (
  <ThemeProvider>
    <table>
      <thead>
        <tr>
          <th>Prop</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <ButtonGroup>
              <ButtonGroupButton size={1}>Button</ButtonGroupButton>
              <ButtonGroupButton size={1}>Button</ButtonGroupButton>
              <ButtonGroupButton size={1}>Button</ButtonGroupButton>
            </ButtonGroup>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            <ButtonGroup>
              <ButtonGroupButton size={2}>Button</ButtonGroupButton>
              <ButtonGroupButton size={2}>Button</ButtonGroupButton>
              <ButtonGroupButton size={2}>Button</ButtonGroupButton>
            </ButtonGroup>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            <ButtonGroup>
              <ButtonGroupButton size={3}>Button</ButtonGroupButton>
              <ButtonGroupButton size={3}>Button</ButtonGroupButton>
              <ButtonGroupButton size={3}>Button</ButtonGroupButton>
            </ButtonGroup>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>
            <ButtonGroup>
              <ButtonGroupButton size={4}>Button</ButtonGroupButton>
              <ButtonGroupButton size={4}>Button</ButtonGroupButton>
              <ButtonGroupButton size={4}>Button</ButtonGroupButton>
            </ButtonGroup>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>
            <ButtonGroup>
              <ButtonGroupButton size={5}>Button</ButtonGroupButton>
              <ButtonGroupButton size={5}>Button</ButtonGroupButton>
              <ButtonGroupButton size={5}>Button</ButtonGroupButton>
            </ButtonGroup>
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>
            <ButtonGroup>
              <ButtonGroupButton size={6}>Button</ButtonGroupButton>
              <ButtonGroupButton size={6}>Button</ButtonGroupButton>
              <ButtonGroupButton size={6}>Button</ButtonGroupButton>
            </ButtonGroup>
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>
            <ButtonGroup>
              <ButtonGroupButton size={7}>Button</ButtonGroupButton>
              <ButtonGroupButton size={7}>Button</ButtonGroupButton>
              <ButtonGroupButton size={7}>Button</ButtonGroupButton>
            </ButtonGroup>
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td>
            <ButtonGroup>
              <ButtonGroupButton size={8}>Button</ButtonGroupButton>
              <ButtonGroupButton size={8}>Button</ButtonGroupButton>
              <ButtonGroupButton size={8}>Button</ButtonGroupButton>
            </ButtonGroup>
          </td>
        </tr>
        <tr>
          <td>9</td>
          <td>
            <ButtonGroup>
              <ButtonGroupButton size={9}>Button</ButtonGroupButton>
              <ButtonGroupButton size={9}>Button</ButtonGroupButton>
              <ButtonGroupButton size={9}>Button</ButtonGroupButton>
            </ButtonGroup>
          </td>
        </tr>
        <tr>
          <td>10</td>
          <td>
            <ButtonGroup>
              <ButtonGroupButton size={10}>Button</ButtonGroupButton>
              <ButtonGroupButton size={10}>Button</ButtonGroupButton>
              <ButtonGroupButton size={10}>Button</ButtonGroupButton>
            </ButtonGroup>
          </td>
        </tr>
      </tbody>
    </table>
  </ThemeProvider>
)

export const Stacked = () => (
  <ThemeProvider>
    <ButtonGroup>
      <ButtonGroupButton stacked>Button</ButtonGroupButton>
      <ButtonGroupButton stacked>Button</ButtonGroupButton>
      <ButtonGroupButton stacked>Button</ButtonGroupButton>
    </ButtonGroup>
  </ThemeProvider>
)

export const Stretch = () => (
  <ThemeProvider>
    <ButtonGroup>
      <ButtonGroupButton stretch>Button</ButtonGroupButton>
      <ButtonGroupButton stretch>Button</ButtonGroupButton>
      <ButtonGroupButton stretch>Button</ButtonGroupButton>
    </ButtonGroup>
  </ThemeProvider>
)

export const Icon = () => {
  return (
    <ThemeProvider>
      <ButtonGroup>
        <ButtonGroupButtonIcon title="Home" alt="home" icon={HomeIcon}>
          Home
        </ButtonGroupButtonIcon>
        <ButtonGroupButtonIcon title="copy" alt="copy" icon={ContentCopyIcon}>
          Copy
        </ButtonGroupButtonIcon>
        <ButtonGroupButtonIcon
          title="delete"
          alt="delete"
          icon={DeleteAlertIcon}
        >
          Delete
        </ButtonGroupButtonIcon>
      </ButtonGroup>
    </ThemeProvider>
  )
}
