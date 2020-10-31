import merge from 'deepmerge'

import { maybe } from '../utils/maybe'
import {
  RadiusInterface,
  RADIUS_CIRCLE,
  RADIUS_NONE,
  RADIUS_ROUND,
  RADIUS_ROUNDED,
  PartialRadiusInterface,
} from './radius.types'
import { PartialThemeInterface } from '../theme'

export function radiusTheme<
  P extends PartialThemeInterface,
  T extends PartialRadiusInterface
>(theme?: P): T {
  const radius = maybe({})(theme?.radius)

  const defaults: RadiusInterface = {
    circle: RADIUS_CIRCLE,
    none: RADIUS_NONE,
    round: RADIUS_ROUND,
    rounded: RADIUS_ROUNDED,
  }

  return merge(defaults, radius) as T
}
