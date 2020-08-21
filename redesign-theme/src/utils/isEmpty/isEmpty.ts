/**
 *
 * @param value any value
 * @returns   true if object is empty, else false.
 */
export const isEmpty = (value: any) => {
  const type = typeof value;
  switch (true) {
    case type == null:
    case Array.isArray(value) &&
      value.filter(v => typeof v === 'undefined').length === value.length:
      return true;

    case type == 'boolean':
    case type == 'number':
      return false;

    case type === 'string':
      return !value;

    case type === 'object':
      return !Object.keys(value).length;
    default:
      return !value;
  }
};
