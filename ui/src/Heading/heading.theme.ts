import { isFunction } from '@redesign-system/theme'

import { HeadingInterface } from './heading.types'

export function headingTheme(props: HeadingInterface) {
  const {
    theme: { Heading },
  } = props

  return {
    position: 'relative',
    ...(isFunction(Heading) ? Heading(props)?.default : Heading?.default),
  }
}

export function headingTitleTheme(props: HeadingInterface) {
  const {
    theme: { HeadingTitle },
  } = props

  return {
    lineHeight: 1,
    display: 'inline-block',
    textTransform: 'inherit',
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
