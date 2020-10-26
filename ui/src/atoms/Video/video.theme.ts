import { isFunction } from '@redesign-system/theme'

import { VideoInterface } from './video.types'

export function videoTheme(props: VideoInterface) {
  const {
    theme: { Video },
  } = props

  return {
    ...(isFunction(Video) ? Video(props)?.default : Video?.default),
  }
}
