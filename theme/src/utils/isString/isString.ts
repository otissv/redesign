export type IsStringType = (value: any) => boolean

export const isString: IsStringType = value => typeof value === 'string'
