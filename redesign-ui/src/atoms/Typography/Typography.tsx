import React, { FC, useMemo } from 'react'

import { TypographyInterface } from './typography.types'
import { Base, useTheme } from '@redesign/ui-core'

import {
  typographyAppearanceTheme,
  typographyTheme,
  typographyModifyTheme,
  typographyWrapTheme,
  typographyTextAlignTheme,
  typographyTransformTheme,
} from './typography.theme'

export const Typography: FC<TypographyInterface> = function Typography({
  as: el = 'p',
  children,
  className = '',
  css = '',
  ...propsRest
}: TypographyInterface) {
  const { theme } = useTheme()
  const classNames = useMemo(() => `Typography ${className}`, [className])
  const cssList: any = useMemo(
    () => [
      typographyAppearanceTheme,
      typographyTheme,
      typographyModifyTheme,
      typographyWrapTheme,
      typographyTextAlignTheme,
      typographyTransformTheme,
      css,
    ],
    [
      typographyAppearanceTheme,
      typographyTheme,
      typographyModifyTheme,
      typographyWrapTheme,
      typographyTextAlignTheme,
      typographyTransformTheme,
      css,
    ]
  )

  const attributes = useMemo(
    () => ({
      ...(el === 'hr'
        ? {
            role: 'separator',
            'aria-orientation': 'horizontal',
          }
        : {}),
    }),
    []
  )

  return (
    <Base
      as={el}
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
