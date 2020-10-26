import { isFunction } from '@redesign-system/theme'

import { CoverImageInterface } from './coverImage.types'

export function coverImageTheme(props: CoverImageInterface) {
  const {
    cover,
    parallax,
    position,
    src,
    repeat,
    height,
    width,
    theme: { CoverImage },
  } = props

  return {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    background: 'transparent',
    backgroundImage: `url("${src}")`,
    height,
    minHeight: '160px',
    width,
    transition: 'all 0.2s ease',
    backgroundAttachment: parallax ? 'fixed' : '',
    backgroundPosition: position ? '50% 50%' : '',
    backgroundSize: cover ? 'cover' : '',
    backgroundRepeat: repeat ? 'no-repeat' : '',
    ...(isFunction(CoverImage)
      ? CoverImage(props)?.default
      : CoverImage?.default),
  }
}

export function coverImageContentTheme(props: CoverImageInterface) {
  const {
    height,
    theme: { CoverImage },
  } = props

  return {
    display: 'flex',
    height: height || '100%',
    ...(isFunction(CoverImage)
      ? CoverImage(props)?.default
      : CoverImage?.default),
  }
}

/*TODO:
 * 1  overlay
 * 2 Caption
 */
