import React, { FC, useMemo } from 'react'

import { Base, useTheme } from '@redesign/ui-core'
import { mediaTheme, mediaFigureTheme, mediaCaptionTheme } from './media.theme'
import { Either } from '../../helpers/Either'
import { MediaInterface, MediaCaptionInterface } from './media.type'
import { isString } from '@redesign/theme'

export const Media: FC<MediaInterface> = function Media({
  as = 'div',
  className = '',
  css = '',
  children,
  caption,
  figure,
}) {
  const { theme } = useTheme()
  const classNames = useMemo(() => `Media ${className}`, [className])
  const cssList: any = useMemo(() => [mediaTheme, css], [mediaTheme, css])

  return (
    <Base as={as} className={classNames} theme={theme} css={cssList}>
      {children}
      <Base theme={theme} css={mediaFigureTheme} as="figure" {...figure} />

      <Either check={isString(caption)}>
        <Base theme={theme} css={mediaCaptionTheme} as="figcaption">
          {caption}
        </Base>
        <Base
          theme={theme}
          css={mediaCaptionTheme}
          as="figcaption"
          {...(caption as MediaCaptionInterface)}
        />
      </Either>
    </Base>
  )
}

Media.displayName = 'Media'
