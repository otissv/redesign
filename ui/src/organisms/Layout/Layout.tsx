import React, { FC, Fragment } from 'react'

import { Base, useTheme } from '@redesign-system/ui-core'
import { LayoutInterface } from './layout.types'
import { Header } from '../../molecules/Header'
import { Either } from '../../helpers/Either'
import { Maybe } from '../../helpers/Maybe'
import { Main } from '../../atoms/Main'

export const Layout: FC<LayoutInterface> = function({
  as = 'div',
  className = '',
  css = '',
  children,
  seo = {},
  header,
  customHeader,
  footer,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `Layout ${className}`
  const CustomHeader = () => <Fragment>{customHeader}</Fragment>
  const Footer = () => <Fragment>{footer}</Fragment>

  return (
    <Base as={as} className={classNames} theme={theme} css={css} {...propsRest}>
      <Either check={Boolean(customHeader)}>
        <CustomHeader />
        <Header {...header} />
      </Either>

      <Main>{children}</Main>

      <Footer />
      <Maybe check={Boolean(footer)}>
        <Footer />
      </Maybe>
    </Base>
  )
}
