import React, { FC } from 'react'

import { TypographyInterface } from './typography.types'
import { Base, useTheme } from '@redesign-system/ui-core'

import {
  typographyAppearanceTheme,
  typographyTheme,
  typographyModifyTheme,
  typographyWrapTheme,
  typographyTransformTheme,
} from './typography.theme'

export const Typography: FC<TypographyInterface> = function Typography({
  as = 'p',
  children,
  className = '',
  css = '',
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `Typography ${className}`
  const cssList = [
    typographyAppearanceTheme,
    typographyTheme,
    typographyModifyTheme,
    typographyWrapTheme,
    typographyTransformTheme,
    css,
  ]
  const attributes = React.useMemo(
    () => ({
      ...(as === 'hr'
        ? {
            role: 'separator',
            'aria-orientation': 'horizontal',
          }
        : {}),
    }),
    [as]
  )

  return (
    <Base
      as={as}
      className={classNames}
      css={cssList}
      {...attributes}
      theme={theme}
      {...propsRest}
    >
      {children}
    </Base>
  )
}

Typography.displayName = 'Typography'
