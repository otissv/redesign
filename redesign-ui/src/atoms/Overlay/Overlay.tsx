import React, { FC, useMemo } from 'react'

import { OverlayInterface } from './overlay.types'
import { overlayTheme } from './overlay.theme'
import { Base, useTheme } from '@redesign/ui-core'

export const Overlay: FC<OverlayInterface> = function Overlay({
  as = 'div',
  className = '',
  css = '',
  ...propsRest
}: OverlayInterface) {
  const { theme } = useTheme()
  const classNames = useMemo(() => `Overlay ${className}`, [className])
  const cssList: any = useMemo(() => [overlayTheme, css], [overlayTheme, css])

  return (
    <Base
      as={as}
      className={classNames}
      theme={theme}
      css={cssList}
      {...propsRest}
    />
  )
}

Overlay.displayName = 'Overlay'
