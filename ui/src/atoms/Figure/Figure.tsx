import React, { FC, useMemo } from 'react'

import { Base, useTheme } from '@redesign/ui-core'
import { mediaTheme, mediaFigureTheme } from './figure.theme'
import { Either } from '../../helpers/Either'
import { FigureInterface } from './figure.type'
import { isString } from '@redesign/theme'
import { Caption, CaptionInterface } from '../../atoms/Caption'
import { Maybe } from '../../helpers/Maybe'

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
  const cssList: any = useMemo(() => [mediaTheme, css], [mediaTheme, css])

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
