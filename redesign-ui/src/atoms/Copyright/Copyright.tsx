import React, { FC, useMemo } from 'react'

import { CopyrightInterface } from './copyright.types'
import { Base, useTheme } from '@redesign/ui-core'
import { copyrightTheme } from './copyright.theme'

export const Copyright: FC<CopyrightInterface> = function Copyright({
  children,
  as = 'small',
  className = '',
  css = '',
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = useMemo(() => `Copyright ${className}`, [className])
  const cssList: any = useMemo(() => [copyrightTheme, css], [
    copyrightTheme,
    css,
  ])

  return (
    <Base
      as={as}
      className={classNames}
      theme={theme}
      css={cssList}
      {...propsRest}
    >
      Copyright © {children}
    </Base>
  )
}

Copyright.displayName = 'Copyright'
