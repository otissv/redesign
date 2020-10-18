import React, { FC } from 'react'

import { AccordionContentInterface } from './accordion.types'
import { accordionContentTheme } from './accordion.theme'
import { Base, useTheme } from '@redesign/ui-core'

export const AccordionContent: FC<AccordionContentInterface> = function AccordionContent({
  as = 'div',
  css = '',
  children,
  className = '',
  active,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `AccordionContent ${className}`

  const getActiveStyle = active ? 'display: block;' : 'display: none;'

  const cssList: any = React.useMemo(() => [accordionContentTheme, css], [
    accordionContentTheme,
    getActiveStyle,
    css,
  ])

  return active ? (
    <Base
      className={classNames}
      theme={theme}
      css={cssList}
      tabIndex="0"
      {...propsRest}
    >
      {children}
    </Base>
  ) : null
}

AccordionContent.displayName = 'AccordionContent'
