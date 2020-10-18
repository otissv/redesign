import merge from 'deepmerge'
import {
  ScrollbarInterface,
  PartialScrollbarInterface,
} from './scrollbar.types'
import { PartialThemeInterface } from '../theme'
import { maybe } from '../utils'

export function scrollbarTheme<
  P extends PartialThemeInterface,
  T extends PartialScrollbarInterface
>(theme?: P): T {
  const maybeTheme = maybe({})
  const color = maybeTheme(theme?.color)
  const scrollbar = maybeTheme(theme?.scrollbar)
  const unit = maybeTheme(theme?.unit)
  const defaults: ScrollbarInterface = {
    width: unit[3],

    height: unit[3],
    backgroundColor: color.background,

    corner: {
      backgroundColor: color.background,
    },
    thumb: {
      backgroundColor: '#7d7d7d94',
      outline: 'transparent',
      transition: 'background-color ease 0.2s',
      hover: {
        backgroundColor: '#7d7d7d',
      },
    },
  }

  return merge(defaults, scrollbar) as T
}
