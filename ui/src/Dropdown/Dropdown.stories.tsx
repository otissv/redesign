import React from 'react'

import { Dropdown, useDropdown } from './Dropdown'
import { DropdownButton } from './DropdownButton'
import { DropdownContent } from './DropdownContent'
import { ThemeProvider } from '@redesign-system/ui-core'
import { List, ListItem } from '../List'
import { Box } from '../Box'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
}

export const Default = () => {
  const { opened, onToggleClick, id } = useDropdown()

  return (
    <ThemeProvider>
      <Dropdown id={id}>
        <DropdownButton id={id} onClick={onToggleClick}>
          Click
        </DropdownButton>
        <DropdownContent
          id={id}
          opened={opened}
          elevate={5}
          css={({ theme: { color, border } }) =>
            `background: ${color.background}; border: ${border.thin}`
          }
        >
          <List p={3} childrenProps={{ mb: 3 }}>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
            <ListItem>Item 5</ListItem>
          </List>
        </DropdownContent>
      </Dropdown>
    </ThemeProvider>
  )
}

export const Appearance = () => {
  const {
    opened: openedPrimary,
    onToggleClick: onClickPrimary,
    id: idPrimary,
  } = useDropdown()
  const {
    opened: openedSecondary,
    onToggleClick: onSecondaryClick,
    id: idSecondary,
  } = useDropdown()
  const {
    opened: openedTertiary,
    onToggleClick: onTertiaryClick,
    id: idTertiary,
  } = useDropdown()

  const {
    opened: openedAccent,
    onToggleClick: onClickAccent,
    id: idAccent,
  } = useDropdown()
  const {
    opened: openedPrimaryAccent,
    onToggleClick: onClickPrimaryAccent,
    id: idPrimaryAccent,
  } = useDropdown()
  const {
    opened: openedSecondaryAccent,
    onToggleClick: onClickSecondaryAccent,
    id: idSecondaryAccent,
  } = useDropdown()
  const {
    opened: openedTertiaryAccent,
    onToggleClick: onClickTertiaryAccent,
    id: idTertiaryAccent,
  } = useDropdown()

  const {
    opened: openedActive,
    onToggleClick: onClickActive,
    id: idActive,
  } = useDropdown()
  const {
    opened: openedPrimaryActive,
    onToggleClick: onClickPrimaryActive,
    id: idPrimaryActive,
  } = useDropdown()
  const {
    opened: openedSecondaryActive,
    onToggleClick: onClickSecondaryActive,
    id: idSecondaryActive,
  } = useDropdown()
  const {
    opened: openedTertiaryActive,
    onToggleClick: onClickTertiaryActive,
    id: idTertiaryActive,
  } = useDropdown()

  const {
    opened: openedAction,
    onToggleClick: onClickAction,
    id: idAction,
  } = useDropdown()
  const {
    opened: openedPrimaryAction,
    onToggleClick: onClickPrimaryAction,
    id: idPrimaryAction,
  } = useDropdown()
  const {
    opened: openedSecondaryAction,
    onToggleClick: onClickSecondaryAction,
    id: idSecondaryAction,
  } = useDropdown()
  const {
    opened: openedTertiaryAction,
    onToggleClick: onClickTertiaryAction,
    id: idTertiaryAction,
  } = useDropdown()

  const {
    opened: openedDanger,
    onToggleClick: onClickDanger,
    id: idDanger,
  } = useDropdown()
  const {
    opened: openedPrimaryDanger,
    onToggleClick: onClickPrimaryDanger,
    id: idPrimaryDanger,
  } = useDropdown()
  const {
    opened: openedSecondaryDanger,
    onToggleClick: onClickSecondaryDanger,
    id: idSecondaryDanger,
  } = useDropdown()
  const {
    opened: openedTertiaryDanger,
    onToggleClick: onClickTertiaryDanger,
    id: idTertiaryDanger,
  } = useDropdown()

  const {
    opened: openedError,
    onToggleClick: onClickError,
    id: idError,
  } = useDropdown()
  const {
    opened: openedPrimaryError,
    onToggleClick: onClickPrimaryError,
    id: idPrimaryError,
  } = useDropdown()
  const {
    opened: openedSecondaryError,
    onToggleClick: onClickSecondaryError,
    id: idSecondaryError,
  } = useDropdown()
  const {
    opened: openedTertiaryError,
    onToggleClick: onClickTertiaryError,
    id: idTertiaryError,
  } = useDropdown()

  const {
    opened: openedSuccess,
    onToggleClick: onClickSuccess,
    id: idSuccess,
  } = useDropdown()
  const {
    opened: openedPrimarySuccess,
    onToggleClick: onClickPrimarySuccess,
    id: idPrimarySuccess,
  } = useDropdown()
  const {
    opened: openedSecondarySuccess,
    onToggleClick: onClickSecondarySuccess,
    id: idSecondarySuccess,
  } = useDropdown()
  const {
    opened: openedTertiarySuccess,
    onToggleClick: onClickTertiarySuccess,
    id: idTertiarySuccess,
  } = useDropdown()

  const {
    opened: openedWarning,
    onToggleClick: onClickWarning,
    id: idWarning,
  } = useDropdown()
  const {
    opened: openedPrimaryWarning,
    onToggleClick: onClickPrimaryWarning,
    id: idPrimaryWarning,
  } = useDropdown()
  const {
    opened: openedSecondaryWarning,
    onToggleClick: onClickSecondaryWarning,
    id: idSecondaryWarning,
  } = useDropdown()
  const {
    opened: openedTertiaryWarning,
    onToggleClick: onClickTertiaryWarning,
    id: idTertiaryWarning,
  } = useDropdown()

  const {
    opened: openedDisabled,
    onToggleClick: onClickDisabled,
    id: idDisabled,
  } = useDropdown()
  const {
    opened: openedPrimaryDisabled,
    onToggleClick: onClickPrimaryDisabled,
    id: idPrimaryDisabled,
  } = useDropdown()
  const {
    opened: openedSecondaryDisabled,
    onToggleClick: onClickSecondaryDisabled,
    id: idSecondaryDisabled,
  } = useDropdown()
  const {
    opened: openedTertiaryDisabled,
    onToggleClick: onClickTertiaryDisabled,
    id: idTertiaryDisabled,
  } = useDropdown()

  return (
    <ThemeProvider>
      <Box mb={3}>
        <h3>Default</h3>
        <Dropdown id={idPrimary}>
          <DropdownButton
            id={idPrimary}
            onClick={onClickPrimary}
            appearance="PRIMARY"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent id={idPrimary} opened={openedPrimary} elevate={5}>
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>

        <Dropdown id={idSecondary}>
          <DropdownButton
            id={idSecondary}
            onClick={onSecondaryClick}
            appearance="SECONDARY"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent
            id={idSecondary}
            opened={openedSecondary}
            elevate={5}
          >
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>

        <Dropdown id={idTertiary}>
          <DropdownButton
            id={idTertiary}
            onClick={onTertiaryClick}
            appearance="TERTIARY"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent id={idTertiary} opened={openedTertiary} elevate={5}>
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>
      </Box>

      <Box mb={3}>
        <h3>Accent</h3>
        <Dropdown id={idAccent}>
          <DropdownButton
            id={idAccent}
            onClick={onClickAccent}
            appearance="ACCENT"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent id={idAccent} opened={openedAccent} elevate={5}>
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>
        <Dropdown id={idPrimaryAccent}>
          <DropdownButton
            id={idPrimaryAccent}
            onClick={onClickPrimaryAccent}
            appearance="PRIMARY_ACCENT"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent
            id={idPrimaryAccent}
            opened={openedPrimaryAccent}
            elevate={5}
          >
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>

        <Dropdown id={idSecondaryAccent}>
          <DropdownButton
            id={idSecondaryAccent}
            onClick={onClickSecondaryAccent}
            appearance="SECONDARY_ACCENT"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent
            id={idSecondaryAccent}
            opened={openedSecondaryAccent}
            elevate={5}
          >
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>

        <Dropdown id={idTertiaryAccent}>
          <DropdownButton
            id={idTertiaryAccent}
            onClick={onClickTertiaryAccent}
            appearance="TERTIARY_ACCENT"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent
            id={idTertiaryAccent}
            opened={openedTertiaryAccent}
            elevate={5}
          >
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>
      </Box>

      <Box mb={3}>
        <h3>Active</h3>
        <Dropdown id={idActive}>
          <DropdownButton
            id={idActive}
            onClick={onClickActive}
            appearance="ACTIVE"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent id={idActive} opened={openedActive} elevate={5}>
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>
        <Dropdown id={idPrimaryActive}>
          <DropdownButton
            id={idPrimaryActive}
            onClick={onClickPrimaryActive}
            appearance="PRIMARY_ACTIVE"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent
            id={idPrimaryActive}
            opened={openedPrimaryActive}
            elevate={5}
          >
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>

        <Dropdown id={idSecondaryActive}>
          <DropdownButton
            id={idSecondaryActive}
            onClick={onClickSecondaryActive}
            appearance="SECONDARY_ACTIVE"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent
            id={idSecondaryActive}
            opened={openedSecondaryActive}
            elevate={5}
          >
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>

        <Dropdown id={idTertiaryActive}>
          <DropdownButton
            id={idTertiaryActive}
            onClick={onClickTertiaryActive}
            appearance="TERTIARY_ACTIVE"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent
            id={idTertiaryActive}
            opened={openedTertiaryActive}
            elevate={5}
          >
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>
      </Box>

      <Box mb={3}>
        <h3>Action</h3>
        <Dropdown id={idAction}>
          <DropdownButton
            id={idAction}
            onClick={onClickAction}
            appearance="ACTION"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent id={idAction} opened={openedAction} elevate={5}>
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>
        <Dropdown id={idPrimaryAction}>
          <DropdownButton
            id={idPrimaryAction}
            onClick={onClickPrimaryAction}
            appearance="PRIMARY_ACTION"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent
            id={idPrimaryAction}
            opened={openedPrimaryAction}
            elevate={5}
          >
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>

        <Dropdown id={idSecondaryAction}>
          <DropdownButton
            id={idSecondaryAction}
            onClick={onClickSecondaryAction}
            appearance="SECONDARY_ACTION"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent
            id={idSecondaryAction}
            opened={openedSecondaryAction}
            elevate={5}
          >
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>

        <Dropdown id={idTertiaryAction}>
          <DropdownButton
            id={idTertiaryAction}
            onClick={onClickTertiaryAction}
            appearance="TERTIARY_ACTION"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent
            id={idTertiaryAction}
            opened={openedTertiaryAction}
            elevate={5}
          >
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>
      </Box>

      <Box mb={3}>
        <h3>Danger</h3>
        <Dropdown id={idDanger}>
          <DropdownButton
            id={idDanger}
            onClick={onClickDanger}
            appearance="DANGER"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent id={idDanger} opened={openedDanger} elevate={5}>
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>
        <Dropdown id={idPrimaryDanger}>
          <DropdownButton
            id={idPrimaryDanger}
            onClick={onClickPrimaryDanger}
            appearance="PRIMARY_DANGER"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent
            id={idPrimaryDanger}
            opened={openedPrimaryDanger}
            elevate={5}
          >
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>

        <Dropdown id={idSecondaryDanger}>
          <DropdownButton
            id={idSecondaryDanger}
            onClick={onClickSecondaryDanger}
            appearance="SECONDARY_DANGER"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent
            id={idSecondaryDanger}
            opened={openedSecondaryDanger}
            elevate={5}
          >
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>

        <Dropdown id={idTertiaryDanger}>
          <DropdownButton
            id={idTertiaryDanger}
            onClick={onClickTertiaryDanger}
            appearance="TERTIARY_DANGER"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent
            id={idTertiaryDanger}
            opened={openedTertiaryDanger}
            elevate={5}
          >
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>
      </Box>

      <Box mb={3}>
        <h3>Error</h3>
        <Dropdown id={idError}>
          <DropdownButton
            id={idError}
            onClick={onClickError}
            appearance="ERROR"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent id={idError} opened={openedError} elevate={5}>
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>
        <Dropdown id={idPrimaryError}>
          <DropdownButton
            id={idPrimaryError}
            onClick={onClickPrimaryError}
            appearance="PRIMARY_ERROR"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent
            id={idPrimaryError}
            opened={openedPrimaryError}
            elevate={5}
          >
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>

        <Dropdown id={idSecondaryError}>
          <DropdownButton
            id={idSecondaryError}
            onClick={onClickSecondaryError}
            appearance="SECONDARY_ERROR"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent
            id={idSecondaryError}
            opened={openedSecondaryError}
            elevate={5}
          >
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>

        <Dropdown id={idTertiaryError}>
          <DropdownButton
            id={idTertiaryError}
            onClick={onClickTertiaryError}
            appearance="TERTIARY_ERROR"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent
            id={idTertiaryError}
            opened={openedTertiaryError}
            elevate={5}
          >
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>
      </Box>

      <Box mb={3}>
        <h3>Success</h3>
        <Dropdown id={idSuccess}>
          <DropdownButton
            id={idSuccess}
            onClick={onClickSuccess}
            appearance="SUCCESS"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent id={idSuccess} opened={openedSuccess} elevate={5}>
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>
        <Dropdown id={idPrimarySuccess}>
          <DropdownButton
            id={idPrimarySuccess}
            onClick={onClickPrimarySuccess}
            appearance="PRIMARY_SUCCESS"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent
            id={idPrimarySuccess}
            opened={openedPrimarySuccess}
            elevate={5}
          >
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>

        <Dropdown id={idSecondarySuccess}>
          <DropdownButton
            id={idSecondarySuccess}
            onClick={onClickSecondarySuccess}
            appearance="SECONDARY_SUCCESS"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent
            id={idSecondarySuccess}
            opened={openedSecondarySuccess}
            elevate={5}
          >
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>

        <Dropdown id={idTertiarySuccess}>
          <DropdownButton
            id={idTertiarySuccess}
            onClick={onClickTertiarySuccess}
            appearance="TERTIARY_SUCCESS"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent
            id={idTertiarySuccess}
            opened={openedTertiarySuccess}
            elevate={5}
          >
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>
      </Box>

      <Box mb={3}>
        <h3>Warning</h3>
        <Dropdown id={idWarning}>
          <DropdownButton
            id={idWarning}
            onClick={onClickWarning}
            appearance="WARNING"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent id={idWarning} opened={openedWarning} elevate={5}>
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>
        <Dropdown id={idPrimaryWarning}>
          <DropdownButton
            id={idPrimaryWarning}
            onClick={onClickPrimaryWarning}
            appearance="PRIMARY_WARNING"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent
            id={idPrimaryWarning}
            opened={openedPrimaryWarning}
            elevate={5}
          >
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>

        <Dropdown id={idSecondaryWarning}>
          <DropdownButton
            id={idSecondaryWarning}
            onClick={onClickSecondaryWarning}
            appearance="SECONDARY_WARNING"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent
            id={idSecondaryWarning}
            opened={openedSecondaryWarning}
            elevate={5}
          >
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>

        <Dropdown id={idTertiaryWarning}>
          <DropdownButton
            id={idTertiaryWarning}
            onClick={onClickTertiaryWarning}
            appearance="TERTIARY_WARNING"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent
            id={idTertiaryWarning}
            opened={openedTertiaryWarning}
            elevate={5}
          >
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>
      </Box>

      <Box mb={3}>
        <h3>Disabled</h3>
        <Dropdown id={idDisabled}>
          <DropdownButton
            id={idDisabled}
            onClick={onClickDisabled}
            appearance="DISABLED"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent id={idDisabled} opened={openedDisabled} elevate={5}>
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>
        <Dropdown id={idPrimaryDisabled}>
          <DropdownButton
            id={idPrimaryDisabled}
            onClick={onClickPrimaryDisabled}
            appearance="PRIMARY_DISABLED"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent
            id={idPrimaryDisabled}
            opened={openedPrimaryDisabled}
            elevate={5}
          >
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>

        <Dropdown id={idSecondaryDisabled}>
          <DropdownButton
            id={idSecondaryDisabled}
            onClick={onClickSecondaryDisabled}
            appearance="SECONDARY_DISABLED"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent
            id={idSecondaryDisabled}
            opened={openedSecondaryDisabled}
            elevate={5}
          >
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>

        <Dropdown id={idTertiaryDisabled}>
          <DropdownButton
            id={idTertiaryDisabled}
            onClick={onClickTertiaryDisabled}
            appearance="TERTIARY_DISABLED"
            mr={3}
          >
            Click
          </DropdownButton>
          <DropdownContent
            id={idTertiaryDisabled}
            opened={openedTertiaryDisabled}
            elevate={5}
          >
            <List p={3} childrenProps={{ mb: 3 }} b="thin" bg="background">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
            </List>
          </DropdownContent>
        </Dropdown>
      </Box>
    </ThemeProvider>
  )
}

export const Justify = () => {
  const { opened, onToggleClick, id } = useDropdown()

  return (
    <ThemeProvider>
      <Dropdown id={id}>
        <DropdownButton id={id} onClick={onToggleClick}>
          Click
        </DropdownButton>
        <DropdownContent
          id={id}
          opened={opened}
          elevate={5}
          justify
          css={({ theme: { color, border } }) =>
            `background: ${color.background}; border: ${border.thin}`
          }
        >
          <List p={3} childrenProps={{ mb: 3 }}>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
            <ListItem>Item 5</ListItem>
          </List>
        </DropdownContent>
      </Dropdown>
    </ThemeProvider>
  )
}

export const Overflow = () => {
  const { opened, onToggleClick, id } = useDropdown()

  return (
    <ThemeProvider>
      <Dropdown id={id}>
        <DropdownButton id={id} onClick={onToggleClick}>
          Click
        </DropdownButton>
        <DropdownContent
          id={id}
          opened={opened}
          overflow="scroll"
          height="100px"
          elevate={5}
          css={({ theme: { color, border } }) =>
            `background: ${color.background}; border: ${border.thin}`
          }
        >
          <List p={3} childrenProps={{ mb: 3 }}>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
            <ListItem>Item 5</ListItem>
            <ListItem>Item 6</ListItem>
            <ListItem>Item 7</ListItem>
            <ListItem>Item 8</ListItem>
            <ListItem>Item 9</ListItem>
            <ListItem>Item 10</ListItem>
            <ListItem>Item 11</ListItem>
            <ListItem>Item 12</ListItem>
          </List>
        </DropdownContent>
      </Dropdown>
    </ThemeProvider>
  )
}

export const Columns = () => {
  const { opened, onToggleClick, id } = useDropdown()

  return (
    <ThemeProvider>
      <Dropdown id={id}>
        <DropdownButton id={id} onClick={onToggleClick}>
          Click
        </DropdownButton>
        <DropdownContent id={id} elevate={5} opened={opened}>
          <List
            columns
            css="width: 405px"
            b="thin"
            childrenProps={{
              w: '200px',
            }}
          >
            <ListItem>
              <List
                childrenProps={{
                  p: 3,
                  m: 3,
                }}
              >
                <ListItem>Item 1</ListItem>
                <ListItem bt="thin">Item 2</ListItem>
                <ListItem bt="thin">Item 3</ListItem>
                <ListItem bt="thin">Item 4</ListItem>
              </List>
            </ListItem>

            <ListItem>
              <List
                childrenProps={{
                  p: 3,
                  m: 3,
                }}
              >
                <ListItem>Item 1</ListItem>
                <ListItem bt="thin">Item 2</ListItem>
                <ListItem bt="thin">Item 3</ListItem>
                <ListItem bt="thin">Item 4</ListItem>
              </List>
            </ListItem>
          </List>
        </DropdownContent>
      </Dropdown>
    </ThemeProvider>
  )
}
