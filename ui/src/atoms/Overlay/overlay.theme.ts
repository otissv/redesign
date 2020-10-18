import { isFunction } from '@redesign/theme'
import { OverlayInterface } from './overlay.types'

export function overlayTheme(props: OverlayInterface) {
  const {
    color: hostColor,
    theme: { Overlay },
  } = props

  return {
    background: hostColor || '#01102420',
    position: 'absolute',
    width: 'inherit',
    height: 'inherit',
    ...(isFunction(Overlay) ? Overlay(props)?.default : Overlay?.default),
  }
}
