export interface MediaQueriesInterface {
  sm: number
  md: number
  lg: number
  xl: number
  [key: string]: number
}

export interface PartialMediaQueriesInterface
  extends Partial<MediaQueriesInterface> {}
