import React from 'react'
import {
  HomeIcon,
  ContentCopyIcon,
  DeleteAlertIcon,
} from '@redesign/material-icons'

import { ButtonGroupButton } from './ButtonGroupButton'
import { ButtonGroupProvider } from './ButtonGroupContext'
import { ButtonGroup } from './ButtonGroup'
import { ThemeProvider } from '@redesign/ui-core'
import { ButtonGroupButtonIcon } from './ButtonGroupButtonIcon'
import { Box } from '../../atoms/Box'

export default {
  title: 'Components/Molecules/ButtonGroup',
  component: ButtonGroup,
}

export const Default = () => (
  <ThemeProvider>
    <ButtonGroupProvider>
      <ButtonGroup>
        <ButtonGroupButton title="Default 1" active>
          Default
        </ButtonGroupButton>
        <ButtonGroupButton title="Default 2">Default</ButtonGroupButton>
        <ButtonGroupButton title="Default 3">Default</ButtonGroupButton>
      </ButtonGroup>
    </ButtonGroupProvider>
  </ThemeProvider>
)

export const Appearance = () => (
  <ThemeProvider>
    <Box matchProps={{ m: 2 }}>
      <ButtonGroupProvider appearance="PRIMARY">
        <ButtonGroup>
          <ButtonGroupButton>Primary</ButtonGroupButton>
          <ButtonGroupButton>Primary</ButtonGroupButton>
          <ButtonGroupButton>Primary</ButtonGroupButton>
        </ButtonGroup>
      </ButtonGroupProvider>

      <ButtonGroupProvider appearance="SECONDARY">
        <ButtonGroup>
          <ButtonGroupButton>Seconday</ButtonGroupButton>
          <ButtonGroupButton>Seconday</ButtonGroupButton>
          <ButtonGroupButton>Seconday</ButtonGroupButton>
        </ButtonGroup>
      </ButtonGroupProvider>

      <ButtonGroupProvider appearance="TERTIARY">
        <ButtonGroup>
          <ButtonGroupButton>Tertiary</ButtonGroupButton>
          <ButtonGroupButton>Tertiary</ButtonGroupButton>
          <ButtonGroupButton>Tertiary</ButtonGroupButton>
        </ButtonGroup>
      </ButtonGroupProvider>

      <ButtonGroupProvider appearance="PRIMARY_ACCENT">
        <ButtonGroup>
          <ButtonGroupButton>Primary</ButtonGroupButton>
          <ButtonGroupButton>Primary</ButtonGroupButton>
          <ButtonGroupButton>Primary</ButtonGroupButton>
        </ButtonGroup>
      </ButtonGroupProvider>

      <ButtonGroupProvider appearance="SECONDARY_ACCENT">
        <ButtonGroup>
          <ButtonGroupButton>Secondary</ButtonGroupButton>
          <ButtonGroupButton>Secondary</ButtonGroupButton>
          <ButtonGroupButton>Secondary</ButtonGroupButton>
        </ButtonGroup>
      </ButtonGroupProvider>

      <ButtonGroupProvider appearance="TERTIARY_ACCENT">
        <ButtonGroup>
          <ButtonGroupButton>Tertiary</ButtonGroupButton>
          <ButtonGroupButton>Tertiary</ButtonGroupButton>
          <ButtonGroupButton>Tertiary</ButtonGroupButton>
        </ButtonGroup>
      </ButtonGroupProvider>

      <ButtonGroupProvider appearance="PRIMARY_ACTIVE">
        <ButtonGroup>
          <ButtonGroupButton>Primary</ButtonGroupButton>
          <ButtonGroupButton>Primary</ButtonGroupButton>
          <ButtonGroupButton>Primary</ButtonGroupButton>
        </ButtonGroup>
      </ButtonGroupProvider>

      <ButtonGroupProvider appearance="SECONDARY_ACTIVE">
        <ButtonGroup>
          <ButtonGroupButton>Seconday</ButtonGroupButton>
          <ButtonGroupButton>Seconday</ButtonGroupButton>
          <ButtonGroupButton>Seconday</ButtonGroupButton>
        </ButtonGroup>
      </ButtonGroupProvider>

      <ButtonGroupProvider appearance="TERTIARY_ACTIVE">
        <ButtonGroup>
          <ButtonGroupButton>Tertiary</ButtonGroupButton>
          <ButtonGroupButton>Tertiary</ButtonGroupButton>
          <ButtonGroupButton>Tertiary</ButtonGroupButton>
        </ButtonGroup>
      </ButtonGroupProvider>

      <ButtonGroupProvider appearance="PRIMARY_ACTION">
        <ButtonGroup>
          <ButtonGroupButton>Primary</ButtonGroupButton>
          <ButtonGroupButton>Primary</ButtonGroupButton>
          <ButtonGroupButton>Primary</ButtonGroupButton>
        </ButtonGroup>
      </ButtonGroupProvider>

      <ButtonGroupProvider appearance="SECONDARY_ACTION">
        <ButtonGroup>
          <ButtonGroupButton>Seconday</ButtonGroupButton>
          <ButtonGroupButton>Seconday</ButtonGroupButton>
          <ButtonGroupButton>Seconday</ButtonGroupButton>
        </ButtonGroup>
      </ButtonGroupProvider>

      <ButtonGroupProvider appearance="TERTIARY_ACTION">
        <ButtonGroup>
          <ButtonGroupButton>Tertiary</ButtonGroupButton>
          <ButtonGroupButton>Tertiary</ButtonGroupButton>
          <ButtonGroupButton>Tertiary</ButtonGroupButton>
        </ButtonGroup>
      </ButtonGroupProvider>

      <ButtonGroupProvider appearance="PRIMARY_DANGER">
        <ButtonGroup>
          <ButtonGroupButton>Primary</ButtonGroupButton>
          <ButtonGroupButton>Primary</ButtonGroupButton>
          <ButtonGroupButton>Primary</ButtonGroupButton>
        </ButtonGroup>
      </ButtonGroupProvider>

      <ButtonGroupProvider appearance="SECONDARY_DANGER">
        <ButtonGroup>
          <ButtonGroupButton>Seconday</ButtonGroupButton>
          <ButtonGroupButton>Seconday</ButtonGroupButton>
          <ButtonGroupButton>Seconday</ButtonGroupButton>
        </ButtonGroup>
      </ButtonGroupProvider>

      <ButtonGroupProvider appearance="SECONDARY">
        <ButtonGroup appearance="TERTIARY_DANGER">
          <ButtonGroupButton>Tertiary</ButtonGroupButton>
          <ButtonGroupButton>Tertiary</ButtonGroupButton>
          <ButtonGroupButton>Tertiary</ButtonGroupButton>
        </ButtonGroup>
      </ButtonGroupProvider>

      <ButtonGroupProvider appearance="PRIMARY_SUCCESS">
        <ButtonGroup>
          <ButtonGroupButton>Primary</ButtonGroupButton>
          <ButtonGroupButton>Primary</ButtonGroupButton>
          <ButtonGroupButton>Primary</ButtonGroupButton>
        </ButtonGroup>
      </ButtonGroupProvider>

      <ButtonGroupProvider appearance="SECONDARY_SUCCESS">
        <ButtonGroup>
          <ButtonGroupButton>Seconday</ButtonGroupButton>
          <ButtonGroupButton>Seconday</ButtonGroupButton>
          <ButtonGroupButton>Seconday</ButtonGroupButton>
        </ButtonGroup>
      </ButtonGroupProvider>

      <ButtonGroupProvider appearance="TERTIARY_SUCCESS">
        <ButtonGroup>
          <ButtonGroupButton>Tertiary</ButtonGroupButton>
          <ButtonGroupButton>Tertiary</ButtonGroupButton>
          <ButtonGroupButton>Tertiary</ButtonGroupButton>
        </ButtonGroup>
      </ButtonGroupProvider>

      <ButtonGroupProvider appearance="PRIMARY_WARNING">
        <ButtonGroup>
          <ButtonGroupButton>Primary</ButtonGroupButton>
          <ButtonGroupButton>Primary</ButtonGroupButton>
          <ButtonGroupButton>Primary</ButtonGroupButton>
        </ButtonGroup>
      </ButtonGroupProvider>

      <ButtonGroupProvider appearance="SECONDARY_WARNING">
        <ButtonGroup>
          <ButtonGroupButton>Seconday</ButtonGroupButton>
          <ButtonGroupButton>Seconday</ButtonGroupButton>
          <ButtonGroupButton>Seconday</ButtonGroupButton>
        </ButtonGroup>
      </ButtonGroupProvider>

      <ButtonGroupProvider appearance="TERTIARY_WARNING">
        <ButtonGroup>
          <ButtonGroupButton>Tertiary</ButtonGroupButton>
          <ButtonGroupButton>Tertiary</ButtonGroupButton>
          <ButtonGroupButton>Tertiary</ButtonGroupButton>
        </ButtonGroup>
      </ButtonGroupProvider>

      <ButtonGroupProvider appearance="PRIMARY_DISABLED">
        <ButtonGroup>
          <ButtonGroupButton>Primary</ButtonGroupButton>
          <ButtonGroupButton>Primary</ButtonGroupButton>
          <ButtonGroupButton>Primary</ButtonGroupButton>
        </ButtonGroup>
      </ButtonGroupProvider>

      <ButtonGroupProvider appearance="SECONDARY_DISABLED">
        <ButtonGroup>
          <ButtonGroupButton>Seconday</ButtonGroupButton>
          <ButtonGroupButton>Seconday</ButtonGroupButton>
          <ButtonGroupButton>Seconday</ButtonGroupButton>
        </ButtonGroup>
      </ButtonGroupProvider>

      <ButtonGroupProvider appearance="TERTIARY_DISABLED">
        <ButtonGroup>
          <ButtonGroupButton>Tertiary</ButtonGroupButton>
          <ButtonGroupButton>Tertiary</ButtonGroupButton>
          <ButtonGroupButton>Tertiary</ButtonGroupButton>
        </ButtonGroup>
      </ButtonGroupProvider>
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
            <ButtonGroupProvider size={1}>
              <ButtonGroup>
                <ButtonGroupButton>Button</ButtonGroupButton>
                <ButtonGroupButton>Button</ButtonGroupButton>
                <ButtonGroupButton>Button</ButtonGroupButton>
              </ButtonGroup>
            </ButtonGroupProvider>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            <ButtonGroupProvider size={2}>
              <ButtonGroup>
                <ButtonGroupButton>Button</ButtonGroupButton>
                <ButtonGroupButton>Button</ButtonGroupButton>
                <ButtonGroupButton>Button</ButtonGroupButton>
              </ButtonGroup>
            </ButtonGroupProvider>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            <ButtonGroupProvider size={3}>
              <ButtonGroup>
                <ButtonGroupButton>Button</ButtonGroupButton>
                <ButtonGroupButton>Button</ButtonGroupButton>
                <ButtonGroupButton>Button</ButtonGroupButton>
              </ButtonGroup>
            </ButtonGroupProvider>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>
            <ButtonGroupProvider size={4}>
              <ButtonGroup>
                <ButtonGroupButton>Button</ButtonGroupButton>
                <ButtonGroupButton>Button</ButtonGroupButton>
                <ButtonGroupButton>Button</ButtonGroupButton>
              </ButtonGroup>
            </ButtonGroupProvider>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>
            <ButtonGroupProvider size={5}>
              <ButtonGroup>
                <ButtonGroupButton>Button</ButtonGroupButton>
                <ButtonGroupButton>Button</ButtonGroupButton>
                <ButtonGroupButton>Button</ButtonGroupButton>
              </ButtonGroup>
            </ButtonGroupProvider>
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>
            <ButtonGroupProvider size={6}>
              <ButtonGroup>
                <ButtonGroupButton>Button</ButtonGroupButton>
                <ButtonGroupButton>Button</ButtonGroupButton>
                <ButtonGroupButton>Button</ButtonGroupButton>
              </ButtonGroup>
            </ButtonGroupProvider>
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>
            <ButtonGroupProvider size={7}>
              <ButtonGroup>
                <ButtonGroupButton>Button</ButtonGroupButton>
                <ButtonGroupButton>Button</ButtonGroupButton>
                <ButtonGroupButton>Button</ButtonGroupButton>
              </ButtonGroup>
            </ButtonGroupProvider>
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td>
            <ButtonGroupProvider size={8}>
              <ButtonGroup>
                <ButtonGroupButton>Button</ButtonGroupButton>
                <ButtonGroupButton>Button</ButtonGroupButton>
                <ButtonGroupButton>Button</ButtonGroupButton>
              </ButtonGroup>
            </ButtonGroupProvider>
          </td>
        </tr>
        <tr>
          <td>9</td>
          <td>
            <ButtonGroupProvider size={9}>
              <ButtonGroup>
                <ButtonGroupButton>Button</ButtonGroupButton>
                <ButtonGroupButton>Button</ButtonGroupButton>
                <ButtonGroupButton>Button</ButtonGroupButton>
              </ButtonGroup>
            </ButtonGroupProvider>
          </td>
        </tr>
        <tr>
          <td>10</td>
          <td>
            <ButtonGroupProvider size={10}>
              <ButtonGroup>
                <ButtonGroupButton>Button</ButtonGroupButton>
                <ButtonGroupButton>Button</ButtonGroupButton>
                <ButtonGroupButton>Button</ButtonGroupButton>
              </ButtonGroup>
            </ButtonGroupProvider>
          </td>
        </tr>
      </tbody>
    </table>
  </ThemeProvider>
)

export const Stacked = () => (
  <ThemeProvider>
    <ButtonGroupProvider stacked>
      <ButtonGroup>
        <ButtonGroupButton>Button</ButtonGroupButton>
        <ButtonGroupButton>Button</ButtonGroupButton>
        <ButtonGroupButton>Button</ButtonGroupButton>
      </ButtonGroup>
    </ButtonGroupProvider>
  </ThemeProvider>
)

export const Stretch = () => (
  <ThemeProvider>
    <ButtonGroupProvider stretch>
      <ButtonGroup>
        <ButtonGroupButton>Button</ButtonGroupButton>
        <ButtonGroupButton>Button</ButtonGroupButton>
        <ButtonGroupButton>Button</ButtonGroupButton>
      </ButtonGroup>
    </ButtonGroupProvider>
  </ThemeProvider>
)

export const Icon = () => (
  <ThemeProvider>
    <ButtonGroupProvider>
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
    </ButtonGroupProvider>
  </ThemeProvider>
)
