import React, { FC } from 'react'

import { HeaderInterface } from './header.types'
import { Heading, HeadingInterface } from '../Heading'
import { CoverImage } from '../CoverImage'
import { isString } from '@redesign-system/theme'
import { Either } from '../../helpers/Either'
import { headerTheme } from './header.theme'
import { Maybe } from '../../helpers/Maybe'

export const Header: FC<HeaderInterface> = function Header({
  as = 'header',
  children,
  className = '',
  css = '',
  height,
  backgroundImageUrl,
  image,
  heading,
  overlay,
  ...propsRest
}) {
  const classNames = `Header ${className}`
  const cssList = [headerTheme, css]

  return (
    <CoverImage
      as={as}
      className={classNames}
      src={backgroundImageUrl}
      overlay={overlay}
      height={height ? height : '450px'}
      css={cssList}
      {...propsRest}
    >
      <Maybe check={Boolean(heading)}>
        <Either check={isString(heading)}>
          <Heading title={heading as string} />
          <Heading {...(heading as HeadingInterface)} />
        </Either>
      </Maybe>
      {children}
    </CoverImage>
  )
}
