import React, { FC } from 'react'

import { AccordionButtonInterface } from './accordion.types'
import { accordionButtonTheme } from './accordion.theme'
import { ButtonGroupButton } from '../../molecules/ButtonGroup'
import { useTheme } from '@redesign-system/ui-core'

export const AccordionButton: FC<AccordionButtonInterface> = function Alert({
  as = 'button',
  children,
  className = '',
  css = '',
  id,
  onClick,
  stacked = false,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `AccordionButton ${className}`
  const cssList = [accordionButtonTheme, css]

  return (
    <ButtonGroupButton
      as={as}
      className={classNames}
      theme={theme}
      css={cssList}
      onClick={onClick}
      stacked={stacked}
      id={id}
      {...propsRest}
    >
      {children}
    </ButtonGroupButton>
  )
}

AccordionButton.displayName = 'AccordionButton'
