import React, { FC } from 'react'

import { iconTheme, iconAppearanceTheme } from './icon.theme'

import { IconInterface } from './icon.types'
import { Base, useTheme } from '@redesign-system/ui-core'

export const Icon: FC<IconInterface> = function Icon({
  as = 'svg',
  children,
  className = '',
  height = '24px',
  css = '',
  title,
  viewBox = '0 0 24 24',
  width = '24px',
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `Icon ${className}`
  const cssList = [iconTheme, iconAppearanceTheme, css]

  const props = {
    height,
    viewBox,
    width,
    ...propsRest,
  }

  return (
    <Base
      as={as}
      className={classNames}
      theme={theme}
      css={cssList}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </Base>
  )
}

Icon.displayName = 'Icon'
