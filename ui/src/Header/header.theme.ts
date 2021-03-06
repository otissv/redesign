import { isFunction } from '@redesign-system/theme'
import { HeaderInterface } from './header.types'

export function headerTheme(props: HeaderInterface) {
  const {
    theme: { Header },
  } = props

  return {
    position: 'relative',
    ...(isFunction(Header) ? Header(props)?.default : Header?.default),
  }
}
