export function either<L, R>(left: L, right: R) {
  return <T>(value: T) => {
    if (typeof left === 'function' && typeof right === 'function') {
      return left(value) ?? right(value)
    }

    if (typeof left === 'function' && typeof right !== 'function') {
      return left(value) ?? right
    }

    if (typeof left !== 'function' && typeof right === 'function') {
      return left ?? right()
    }

    if (typeof left !== 'function' && typeof right !== 'function') {
      return left ?? right
    }
  }
}
