export const PRIMARY = 'PRIMARY'
export const SECONDARY = 'SECONDARY'
export const TERTIARY = 'TERTIARY'
export type DefaultTypes = typeof PRIMARY | typeof SECONDARY | typeof TERTIARY

export const ACCENT = 'ACCENT'
export const PRIMARY_ACCENT = 'PRIMARY_ACCENT'
export const SECONDARY_ACCENT = 'SECONDARY_ACCENT'
export const TERTIARY_ACCENT = 'TERTIARY_ACCENT'
export type AccentTypes =
  | typeof ACCENT
  | typeof PRIMARY_ACCENT
  | typeof SECONDARY_ACCENT
  | typeof TERTIARY_ACCENT

export const ACTIVE = 'ACTIVE'
export const PRIMARY_ACTIVE = 'PRIMARY_ACTIVE'
export const SECONDARY_ACTIVE = 'SECONDARY_ACTIVE'
export const TERTIARY_ACTIVE = 'TERTIARY_ACTIVE'
export type ActiveTypes =
  | typeof ACTIVE
  | typeof PRIMARY_ACTIVE
  | typeof SECONDARY_ACTIVE
  | typeof TERTIARY_ACTIVE

export const ACTION = 'ACTION'
export const PRIMARY_ACTION = 'PRIMARY_ACTION'
export const SECONDARY_ACTION = 'SECONDARY_ACTION'
export const TERTIARY_ACTION = 'TERTIARY_ACTION'
export type ActionTypes =
  | typeof ACTION
  | typeof PRIMARY_ACTION
  | typeof SECONDARY_ACTION
  | typeof TERTIARY_ACTION

export const DANGER = 'DANGER'
export const PRIMARY_DANGER = 'PRIMARY_DANGER'
export const SECONDARY_DANGER = 'SECONDARY_DANGER'
export const TERTIARY_DANGER = 'TERTIARY_DANGER'
export type DangerTypes =
  | typeof DANGER
  | typeof PRIMARY_DANGER
  | typeof SECONDARY_DANGER
  | typeof TERTIARY_DANGER

export const ERROR = 'ERROR'
export const PRIMARY_ERROR = 'PRIMARY_ERROR'
export const SECONDARY_ERROR = 'SECONDARY_ERROR'
export const TERTIARY_ERROR = 'TERTIARY_ERROR'
export type ErrorTypes =
  | typeof ERROR
  | typeof PRIMARY_ERROR
  | typeof SECONDARY_ERROR
  | typeof TERTIARY_ERROR

export const SUCCESS = 'SUCCESS'
export const PRIMARY_SUCCESS = 'PRIMARY_SUCCESS'
export const SECONDARY_SUCCESS = 'SECONDARY_SUCCESS'
export const TERTIARY_SUCCESS = 'TERTIARY_SUCCESS'
export type SuccessTypes =
  | typeof SUCCESS
  | typeof PRIMARY_SUCCESS
  | typeof SECONDARY_SUCCESS
  | typeof TERTIARY_SUCCESS

export const WARNING = 'WARNING'
export const PRIMARY_WARNING = 'PRIMARY_WARNING'
export const SECONDARY_WARNING = 'SECONDARY_WARNING'
export const TERTIARY_WARNING = 'TERTIARY_WARNING'
export type WarningTypes =
  | typeof WARNING
  | typeof PRIMARY_WARNING
  | typeof SECONDARY_WARNING
  | typeof TERTIARY_WARNING

export const DISABLED = 'DISABLED'
export const PRIMARY_DISABLED = 'PRIMARY_DISABLED'
export const SECONDARY_DISABLED = 'SECONDARY_DISABLED'
export const TERTIARY_DISABLED = 'TERTIARY_DISABLED'
export type DisabledTypes =
  | typeof DISABLED
  | typeof PRIMARY_DISABLED
  | typeof SECONDARY_DISABLED
  | typeof TERTIARY_DISABLED

export type AppearanceTypes =
  | typeof PRIMARY
  | typeof SECONDARY
  | typeof TERTIARY
  | typeof ACCENT
  | typeof PRIMARY_ACCENT
  | typeof SECONDARY_ACCENT
  | typeof TERTIARY_ACCENT
  | typeof ACTIVE
  | typeof PRIMARY_ACTIVE
  | typeof SECONDARY_ACTIVE
  | typeof TERTIARY_ACTIVE
  | typeof ACTION
  | typeof PRIMARY_ACTION
  | typeof SECONDARY_ACTION
  | typeof TERTIARY_ACTION
  | typeof DANGER
  | typeof PRIMARY_DANGER
  | typeof SECONDARY_DANGER
  | typeof TERTIARY_DANGER
  | typeof ERROR
  | typeof PRIMARY_ERROR
  | typeof SECONDARY_ERROR
  | typeof TERTIARY_ERROR
  | typeof SUCCESS
  | typeof PRIMARY_SUCCESS
  | typeof SECONDARY_SUCCESS
  | typeof TERTIARY_SUCCESS
  | typeof WARNING
  | typeof PRIMARY_WARNING
  | typeof SECONDARY_WARNING
  | typeof TERTIARY_WARNING
  | typeof DISABLED
  | typeof PRIMARY_DISABLED
  | typeof SECONDARY_DISABLED
  | typeof TERTIARY_DISABLED
  | string

export type AppearanceBaseTypes =
  | typeof PRIMARY
  | typeof ACCENT
  | typeof ACTIVE
  | typeof ACTION
  | typeof DANGER
  | typeof ERROR
  | typeof SUCCESS
  | typeof WARNING
  | typeof DISABLED
  | string
