import merge from 'deepmerge'
import { UnitInterface, PartialUnitInterface } from './unit.types'
import { PartialThemeInterface } from '../theme'

export function unitTheme<
  P extends PartialThemeInterface,
  T extends PartialUnitInterface
>(theme?: P): T {
  const unit = theme?.unit || {}

  const defaults: UnitInterface = {
    0: '0px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '24px',
    6: '32px',
    7: '48px',
    8: '64px',
    9: '96px',
    10: '128px',
    default: '24px',
  }

  return merge(defaults, unit) as T
}
