import React, { FC } from 'react'

import { Base, useTheme } from '@redesign-system/ui-core'
import { mediaTheme, mediaFigureTheme } from './figure.theme'
import { Either } from '../Either'
import { FigureInterface } from './figure.type'
import { isString } from '@redesign-system/theme'
import { Caption, CaptionInterface } from '../Caption'
import { Maybe } from '../Maybe'

export const Figure: FC<FigureInterface> = function Media({
  as = 'div',
  className = '',
  css = '',
  children,
  caption,
  figure,
}) {
  const { theme } = useTheme()
  const classNames = `Media ${className}`
  const cssList = [mediaTheme, css]

  return (
    <Base as={as} className={classNames} theme={theme} css={cssList}>
      {children}
      <Base theme={theme} css={mediaFigureTheme} as="figure" {...figure} />

      <Maybe check={Boolean(caption)}>
        <Either check={isString(caption)}>
          <Caption>{caption}</Caption>
          <Caption {...(caption as CaptionInterface)} />
        </Either>
      </Maybe>
    </Base>
  )
}

Figure.displayName = 'Figure'
