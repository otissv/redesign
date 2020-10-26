import React, { FC } from 'react'
import { Base, useTheme } from '@redesign-system/ui-core'

import { BadgeInterface } from './badge.types'

import { badgeTheme, badgeAppearanceTheme, badgePillTheme } from './badge.theme'

export const Badge: FC<BadgeInterface> = function Badge({
  appearance,
  as = 'span',
  children,
  className = '',
  css = '',
  pill,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `Badge ${className}`
  const cssList = [badgeTheme, badgePillTheme, badgeAppearanceTheme, css]

  return (
    <Base
      as={as}
      appearance={appearance}
      className={classNames}
      pill={pill}
      theme={theme}
      css={cssList}
      __ignore="pill"
      {...propsRest}
    >
      {children}
    </Base>
  )
}

Badge.displayName = 'Badge'
