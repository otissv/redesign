export function memoize<V>(fn: (arg: string) => V) {
  const cache: any = {}

  return (arg: string) => {
    if (cache[arg] === undefined) cache[arg] = fn(arg)
    return cache[arg]
  }
}
