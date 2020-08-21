import React, { FC, useMemo } from 'react'
import { Base, useTheme } from '@redesign/ui-core'

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
  const classNames = useMemo(() => `Badge ${className}`, [className])
  const cssList: any = useMemo(
    () => [badgeTheme, badgePillTheme, badgeAppearanceTheme, css],
    [badgeTheme, css]
  )

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
