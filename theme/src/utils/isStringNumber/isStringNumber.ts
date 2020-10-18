export const isStringNumber = (value: string): boolean =>
  typeof value === 'string' && !!value.match(/^-?\d+\.?\d*$/);
