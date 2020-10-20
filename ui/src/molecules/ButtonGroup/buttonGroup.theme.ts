import { isFunction } from '@redesign-system/theme'

import {
  ButtonGroupInterface,
  ButtonGroupButtonInterface,
  ButtonGroupButtonIconInterface,
} from './buttonGroup.types'

export function buttonGroupTheme(props: ButtonGroupInterface) {
  const {
    stacked,
    theme: { transition, ButtonGroup },
  } = props

  return {
    display: 'inline-flex',
    position: 'relative',
    transition: transition.easeMedium(),
    verticalAlign: 'middle',
    flexDirection: stacked ? 'column' : 'row',
    ...(isFunction(ButtonGroup)
      ? ButtonGroup(props)?.default
      : ButtonGroup?.default),
  }
}

export function buttonStretchGroupTheme(props: ButtonGroupInterface) {
  const {
    stretch,
    theme: { ButtonGroup },
  } = props

  const buttonGroupStretchTheme = isFunction(ButtonGroup)
    ? ButtonGroup(props)?.stretch
    : ButtonGroup?.stretch

  return stretch ? { width: '100%', ...buttonGroupStretchTheme } : {}
}

export function buttonGroupButtonTheme(props: ButtonGroupButtonInterface) {
  const {
    theme: { ButtonGroupButton },
  } = props

  return {
    ...(isFunction(ButtonGroupButton)
      ? ButtonGroupButton(props)?.default
      : ButtonGroupButton?.default),
  }
}

export function buttonGroupButtonIconTheme(
  props: ButtonGroupButtonIconInterface
) {
  const {
    theme: { ButtonGroupButtonIcon },
  } = props

  return {
    ...(isFunction(ButtonGroupButtonIcon)
      ? ButtonGroupButtonIcon(props)?.default
      : ButtonGroupButtonIcon?.default),
  }
}
