export const charAt = (n: number) => (str: string) => str.charAt(n)
export const dropChars = (n: number) => (str: string) => str.substr(n)
export const firstChar = charAt(0)
export const dropFirstChar = dropChars(1)

export const toUpper = (str: string) => str.toUpperCase()
export const toLower = (str: string) => str.toLowerCase()
export const toCamel = (str: string) => {
  const string = str.trim()
  const isCamelCase = /^[a-z][A-Za-z]*$/.test(string)

  return isCamelCase
    ? string
    : string
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr.toUpperCase())
}

export const toTitle = (str: string) => str.replace(/(^|\s)\S/g, toUpper)

export const toUpperFirst = (str: string) =>
  str.toLowerCase().replace(/^./, toUpper)

export const toLowerFirst = (str: string) =>
  str.toUpperCase().replace(/^./, toLower)

export const toPascalCase = (str: string) =>
  str.replace(/\w\S*/g, m => toUpper(firstChar(m)) + toLower(dropFirstChar(m)))

export const joinCase = (joiner: string) => (str: string) =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map(toLower)
    .join(joiner)

export const toKebabCase = joinCase('-')
export const toSnakeCase = joinCase('_')
