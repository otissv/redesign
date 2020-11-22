export interface BreakpointsInterface {
  sm: { min: number; max: number }
  md: { min: number; max: number }
  lg: { min: number; max: number }
  xl: { min: number; max: number }
  [key: string]: { min: number; max: number }
}

export interface PartialBreakpointsInterface
  extends Partial<BreakpointsInterface> {}

export interface MediaQueriesInterface {
  sm: { min: string; max: string }
  md: { min: string; max: string }
  lg: { min: string; max: string }
  xl: { min: string; max: string }
  [key: string]: { min: string; max: string }
}

export interface PartialMediaQueriesInterface
  extends Partial<MediaQueriesInterface> {}
