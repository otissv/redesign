import React, { FC } from 'react'

import { ErrorMessageInterface } from './errorMessage.types'
import { Base, useTheme } from '@redesign-system/ui-core'

import {
  errorMessageTheme,
  errorMessageAppearanceTheme,
} from './errorMessage.theme'

export const ErrorMessage: FC<ErrorMessageInterface> = function ErrorMessage({
  as = 'div',
  children,
  className = '',
  css = '',
  ...propsRest
}: ErrorMessageInterface) {
  const { theme } = useTheme()
  const classNames = `ErrorMessage ${className}`
  const cssList = [errorMessageTheme, errorMessageAppearanceTheme, css]

  return (
    <Base
      as={as}
      className={classNames}
      theme={theme}
      css={cssList}
      {...propsRest}
    >
      {children}
    </Base>
  )
}

ErrorMessage.displayName = 'ErrorMessage'
