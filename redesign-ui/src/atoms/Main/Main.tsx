import React, { FC, useMemo } from 'react'

import { MainInterface } from './main.types'
import { Base, useTheme } from '@redesign/ui-core'

export const Main: FC<MainInterface> = function Main({
  children,
  as = 'main',
  className = '',
  css = '',
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = useMemo(() => `Main ${className}`, [className])

  return (
    <Base as={as} className={classNames} theme={theme} css={css} {...propsRest}>
      {children}
    </Base>
  )
}

Main.displayName = 'Main'
