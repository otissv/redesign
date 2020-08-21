import { ListInterface } from './list.types'
export function listTheme({}: ListInterface) {
  return {
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
  }
}

export function listItemTheme({}: ListInterface) {
  return {
    display: 'block',

    a: {
      textDecoration: 'none',
    },
  }
}
