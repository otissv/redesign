import React, { FC } from 'react'

import { Typography } from '../Typography'
import { LinkInterface } from './link.types'
import { linkTheme, linkAppearanceTheme } from './link.theme'

export const Link: FC<LinkInterface> = function Link({
  as: el = 'a',
  children,
  className = '',
  css = '',
  href,
  ...propsRest
}) {
  const classNames = `Link ${className}`
  const cssList = [linkTheme, linkAppearanceTheme, css]

  return (
    <Typography
      className={classNames}
      css={cssList}
      href={href}
      as={el}
      role="link"
      {...propsRest}
    >
      {children}
    </Typography>
  )
}
Link.displayName = 'Link'
