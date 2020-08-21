export const isLength = (length: number) => (value: string): boolean =>
  value != null && value.length === length;
