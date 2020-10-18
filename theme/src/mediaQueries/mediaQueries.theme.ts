import merge from 'deepmerge'

import {
  MediaQueriesInterface,
  PartialMediaQueriesInterface,
} from './mediaQueries.theme.types'
import { PartialThemeInterface } from '../theme'
import { maybe } from '../utils'

export function mediaQueriesTheme<
  P extends PartialThemeInterface,
  T extends PartialMediaQueriesInterface
>(theme: P): T {
  const mediaQueries = maybe({})(theme?.mediaQueries)

  const defaults: MediaQueriesInterface = {
    sm: 425,
    md: 768,
    lg: 1024,
    xl: 1280,
  }

  return merge(defaults, mediaQueries) as T
}
