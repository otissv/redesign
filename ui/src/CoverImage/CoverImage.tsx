import React, { FC } from 'react'

import { CoverImageInterface } from './coverImage.types'
import { Overlay } from '../Overlay'
import { Base, useTheme } from '@redesign-system/ui-core'
import { Maybe } from '../Maybe'
import { Either } from '../Either'
import { Caption, CaptionInterface } from '../Caption'
import { isString } from '@redesign-system/theme'
import { coverImageContentTheme, coverImageTheme } from './coverImage.theme'

export const CoverImage: FC<CoverImageInterface> = function CoverImage({
  as = 'div',
  caption = '',
  children,
  className = '',
  cover = true,
  css = '',
  height = '100%',
  overlay,
  parallax = false,
  position = '50% 50%',
  repeat = false,
  src,
  width = '100%',
  content,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `CoverImage ${className}`
  const cssList = [coverImageTheme, css]

  return (
    <Base
      className={classNames}
      cover={cover}
      css={cssList}
      height={height}
      parallax={parallax}
      position={position}
      repeat={repeat}
      src={src}
      theme={theme}
      width={width}
      {...propsRest}
    >
      <Maybe check={Boolean(overlay)}>
        <Overlay className="overlay" color={overlay} />
      </Maybe>
      <CoverImageContent {...content}>{children}</CoverImageContent>
      <Maybe check={Boolean(caption)}>
        <Either check={isString(caption)}>
          <Caption>{caption as string}</Caption>
          <Caption {...(caption as CaptionInterface)} />
        </Either>
      </Maybe>
    </Base>
  )
}

function CoverImageContent({
  as = 'div',
  children,
  className = '',
  css = '',
  ...propsRest
}: any) {
  const { theme } = useTheme()
  const classNames = `CoverImageContent ${className}`
  const cssList = [coverImageContentTheme, css]

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
