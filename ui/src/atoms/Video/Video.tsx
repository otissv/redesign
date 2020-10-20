import React, { FC } from 'react'

import { Base, useTheme } from '@redesign-system/ui-core'

import { VideoInterface } from './video.types'
import { videoTheme } from './video.theme'

export const Video: FC<VideoInterface> = function Video({
  as = 'video',
  allowFullScreen,
  autoPlay,
  children,
  className = '',
  embeded = false,
  height = 'auto',
  inview = false,
  loop = false,
  muted = false,
  playsInline = false,
  preload = 'auto',
  src,
  width = '100%',
  css = '',
  ...propsRest
}) {
  const { theme } = useTheme()

  const classNames = `Video ${className}`
  const cssList = [videoTheme, css]
  const properties = {
    ...propsRest,
    allowFullScreen: allowFullScreen ? true : undefined,
    autoPlay: autoPlay ? true : undefined,
    height,
    inview: inview ? true : undefined,
    loop,
    muted: muted || undefined,
    playsInline,
    preload,
    src,
    width,
  }

  return (
    <Base
      as={as}
      className={classNames}
      theme={theme}
      css={cssList}
      {...(embeded ? null : properties)}
    >
      {embeded ? <iframe frameBorder="0" /> : children}
    </Base>
  )
}

export default Video
