import React, { FC } from 'react'

import { AccordionItemInterface } from './accordion.types'
import { accordionItemTheme } from './accordion.theme'
import { Base, useTheme } from '@redesign/ui-core'

export const AccordionItem: FC<AccordionItemInterface> = function Alert({
  as = 'div',
  children,
  className = '',
  css = '',
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `AccordionItem ${className}`
  const cssList: any = React.useMemo(() => [accordionItemTheme, css], [
    accordionItemTheme,
    css,
  ])

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

AccordionItem.displayName = 'AccordionItem'
