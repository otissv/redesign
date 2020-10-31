/**
 * @param o   Object to be frozen.
 * @returns   Returns frozen object.
 */
export const deepFreeze = (o: any) => {
  Object.freeze(o)

  Object.getOwnPropertyNames(o).forEach((prop: string) => {
    if (
      Object.prototype.hasOwnProperty.call(o, prop) &&
      o[prop] !== null &&
      (typeof o[prop] === 'object' || typeof o[prop] === 'function') &&
      !Object.isFrozen(o[prop])
    ) {
      deepFreeze(o[prop])
    }
  })

  return o
}
