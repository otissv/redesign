export const UNIT_0 = '0px'
export const UNIT_1 = '4px'
export const UNIT_2 = '8px'
export const UNIT_3 = '12px'
export const UNIT_4 = '16px'
export const UNIT_5 = '24px'
export const UNIT_6 = '32px'
export const UNIT_7 = '48px'
export const UNIT_8 = '64px'
export const UNIT_9 = '96px'
export const UNIT_10 = '128px'
export const UNIT_11 = '192px'
export const UNIT_12 = '256px'
export const UNIT_13 = '384px'
export const UNIT_14 = '512px'
export const UNIT_15 = '768px'
export const UNIT_16 = '1024px'
export const UNIT_DEFAULT = '24px'

export interface UnitInterface {
  0: string
  1: string
  2: string
  3: string
  4: string
  5: string
  6: string
  7: string
  8: string
  9: string
  10: string
  11: string
  12: string
  13: string
  14: string
  15: string
  16: string
  default: string
}

export interface UnitPositionsInterface {
  unit: UnitInterface
  style: string
}

export interface PartialUnitInterface extends Partial<UnitInterface> {}
