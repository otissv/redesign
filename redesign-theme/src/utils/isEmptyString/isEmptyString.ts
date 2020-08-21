export const isEmptyString = (value: string): boolean =>
  typeof value === 'string' && value.trim() !== '';
