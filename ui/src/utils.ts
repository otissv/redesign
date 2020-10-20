export function map(fn?: (key: string | number, value: any) => any) {
  let list: any[] = []

  return (object: any) => {
    switch (true) {
      case Array.isArray(object):
        return object.map((value: string, index: number) =>
          fn ? fn(index, value) : [index, value]
        )

      case Boolean(object.forEach): {
        object.forEach((value: string, key: string) =>
          list.push(fn ? fn(key, value) : [key, value])
        )
        return list
      }

      default:
        return Object.entries(object).map((value: [string, any]) =>
          fn ? fn(...value) : value
        )
    }
  }
}
