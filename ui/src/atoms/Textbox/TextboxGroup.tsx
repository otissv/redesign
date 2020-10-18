import React, { FC, useMemo } from 'react'
import { Base } from '@redesign/ui-core'

import { TextboxInterface } from './textbox.types'

import { textboxGroupTheme } from './TextboxGroup.theme'
import {
  textboxAppearanceTheme,
  textboxSizeTheme,
  textboxWidthsTheme,
} from './textbox.theme'

export const TextboxGroup: FC<TextboxInterface> = function TextboxGroup({
  children,
  className = '',
  theme,
  css = '',
  ...propsRest
}) {
  const classNames = `TextboxGroup ${className}`
  const cssList: any = useMemo(
    () => [
      textboxAppearanceTheme,
      textboxSizeTheme,
      textboxWidthsTheme,
      textboxGroupTheme,
      css,
    ],
    [
      textboxGroupTheme,
      textboxAppearanceTheme,
      textboxSizeTheme,
      textboxWidthsTheme,
      css,
    ]
  )

  return (
    <Base
      theme={theme}
      role="group"
      className={classNames}
      css={cssList}
      {...propsRest}
    >
      {children}
    </Base>
  )
}
