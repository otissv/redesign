import { isFunction } from '@redesign-system/theme'

import { HeadingInterface } from './heading.types'

export function headingTheme(props: HeadingInterface) {
  const {
    theme: { color, Heading },
  } = props

  return {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    color: color.white,
    ...(isFunction(Heading) ? Heading(props)?.default : Heading?.default),
  }
}

export function headingTitleTheme(props: HeadingInterface) {
  const {
    theme: { HeadingTitle },
  } = props

  return {
    textTransform: 'inherit',
    textAlign: 'left',
    wordBreak: 'keep-all',
    ...(isFunction(HeadingTitle)
      ? HeadingTitle(props)?.title
      : HeadingTitle?.title),
  }
}

export function headingSecondaryTitleTheme(props: HeadingInterface) {
  const {
    theme: { HeadingSecondaryTitle },
  } = props

  return {
    textTransform: 'inherit',
    ...(isFunction(HeadingSecondaryTitle)
      ? HeadingSecondaryTitle(props)?.secondaryTitle
      : HeadingSecondaryTitle?.secondaryTitle),
  }
}
