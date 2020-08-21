import React, { FC, useMemo } from 'react'

import { CoverImageInterface } from './coverImage.types'
import { Overlay } from '../../atoms/Overlay'
import { Base, useTheme } from '@redesign/ui-core'
import { Maybe } from '../../helpers/Maybe'
import { Either } from '../../helpers/Either'
import { Caption, CaptionInterface } from '../../atoms/Caption'
import { isString } from '@redesign/theme'

export const CoverImage: FC<CoverImageInterface> = ({
  as = 'div',
  caption = '',
  children,
  className = '',
  cover = true,
  height = '100%',
  overlay,
  parallax = false,
  position = '50% 50%',
  repeat = false,
  src,
  width = '100%',
  ...propsRest
}) => {
  const { theme } = useTheme()
  const classNames = useMemo(() => `CoverImage ${className}`, [className])

  return (
    <Base
      className={classNames}
      cover={cover}
      height={height}
      parallax={parallax}
      position={position}
      repeat={repeat}
      theme={theme}
      width={width}
      src={src}
      {...propsRest}
    >
      <Maybe>
        <Overlay className="overlay" color={overlay} />
      </Maybe>

      {children}
      <Either check={isString(caption)}>
        <Caption>{caption as string}</Caption>
        <Caption {...(caption as CaptionInterface)} />
      </Either>
    </Base>
  )
}
