import React, { FC, useMemo } from 'react'

import { HeaderInterface } from './header.types'
import { Heading, HeadingInterface } from '../Heading'
import { CoverImage } from '../CoverImage'
import { isString } from '@redesign/theme'
import { Either } from '../../helpers/Either'

export const Header: FC<HeaderInterface> = function Header({
  as = 'header',
  children,
  className = '',
  css = '',
  headerHeight = '',
  backgroundImageUrl,
  image,
  heading,
  overlay,
  ...propsRest
}) {
  const classNames = useMemo(() => `Header ${className}`, [className])

  return (
    <CoverImage
      as={as}
      className={classNames}
      src={backgroundImageUrl}
      overlay={overlay}
      height={headerHeight ? headerHeight : '450px'}
      css={css}
      {...propsRest}
    >
      <Either check={isString(heading)}>
        <Heading title={heading as string} />
        <Heading {...(heading as HeadingInterface)} />
      </Either>
      {children}
    </CoverImage>
  )
}
