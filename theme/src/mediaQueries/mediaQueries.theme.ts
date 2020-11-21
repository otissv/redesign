import merge from 'deepmerge'

import {
  BreakpointsInterface,
  PartialBreakpointsInterface,
  PartialMediaQueriesInterface,
} from './mediaQueries.theme.types'
import { PartialThemeInterface } from '../theme'
import { maybe } from '../utils/maybe'

export function breakpointTheme<
  P extends PartialThemeInterface,
  T extends PartialBreakpointsInterface
>(theme: P): T {
  const breakpoints = maybe({})(theme?.breakpoints)

  const defaults: BreakpointsInterface = {
    sm: 425,
    md: 768,
    lg: 1024,
    xl: 1280,
  }

  return merge(defaults, breakpoints) as T
}

export function mediaQueriesTheme<
  P extends PartialThemeInterface,
  T extends PartialMediaQueriesInterface
>(theme: P): T {
  const mediaQueries = maybe({})(theme?.mediaQueries)
  const breakpoints = maybe({})(theme?.breakpoints)

  const defaults = Object.entries(breakpoints).reduce(
    (acc: Record<string, any>, [key, value]: [string, any]) => {
      return {
        ...acc,
        [key]: `@media(min-width: ${value}px)`,
      }
    },
    {}
  )

  return merge(defaults, mediaQueries) as T
}
