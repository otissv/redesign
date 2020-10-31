import merge from 'deepmerge'
import { maybe } from '../utils/maybe'

import {
  ElevateInterface,
  ELEVATE_0,
  ELEVATE_1,
  ELEVATE_2,
  ELEVATE_3,
  ELEVATE_4,
  ELEVATE_5,
  PartialElevateInterface,
} from './elevate.types'
import { PartialThemeInterface } from '../theme'

export function elevateTheme<
  P extends PartialThemeInterface,
  T extends PartialElevateInterface
>(theme?: P): T {
  const elevate = maybe({})(theme?.elevate)

  const defaults: ElevateInterface = {
    0: ELEVATE_0,
    1: ELEVATE_1,
    2: ELEVATE_2,
    3: ELEVATE_3,
    4: ELEVATE_4,
    5: ELEVATE_5,
  }

  return merge(defaults, elevate) as T
}
