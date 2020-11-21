export interface BreakpointsInterface {
  sm: number
  md: number
  lg: number
  xl: number
  [key: string]: number
}

export interface PartialBreakpointsInterface
  extends Partial<BreakpointsInterface> {}

export interface MediaQueriesInterface {
  sm: string
  md: string
  lg: string
  xl: string
  [key: string]: string
}

export interface PartialMediaQueriesInterface
  extends Partial<MediaQueriesInterface> {}
