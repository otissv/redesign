import React, { FC } from 'react'
import { CaptionInterface } from './caption.types'

import { Base, useTheme } from '@redesign-system/ui-core'
import { captionTheme } from './caption.theme'

export const Caption: FC<CaptionInterface> = function Caption({
  as = 'figcaption',
  children,
  className = '',
  css = '',
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `imageCaption ${className}`
  const cssList = [captionTheme, css]

  return (
    <Base
      as={as}
      css={cssList}
      className={classNames}
      theme={theme}
      {...propsRest}
    >
      {children}
    </Base>
  )
}

Caption.displayName = 'Caption'
