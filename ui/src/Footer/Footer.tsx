import React, { FC } from 'react'
import { Base, useTheme } from '@redesign-system/ui-core'

import { FooterInterface } from './footer.types'
import { footerTheme } from './footer.theme'

export const Footer: FC<FooterInterface> = function Box({
  as = 'footer',
  children,
  className = '',
  css = '',
  ...propsRest
}: any) {
  const { theme } = useTheme()
  const classNames = `Footer ${className}`
  const cssList: any = [footerTheme, css]

  return (
    <Base
      as={as}
      className={classNames}
      css={cssList}
      theme={theme}
      {...propsRest}
    >
      {children}
    </Base>
  )
}

Footer.displayName = 'Footer'
