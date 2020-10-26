import { isFunction } from '@redesign-system/theme'

import { ListInterface } from './list.types'
export function listTheme(props: ListInterface) {
  const {
    columns,
    theme: { List },
  } = props

  return {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
    ...(columns
      ? {
          flexDirection: 'row',
          flexWrap: 'wrap',
        }
      : {}),
    ...(isFunction(List) ? List(props)?.default : List?.default),
  }
}

export function listItemTheme(props: ListInterface) {
  const {
    theme: { ListItem },
  } = props

  return {
    display: 'block',
    a: {
      textDecoration: 'none',
    },
    ...(isFunction(ListItem) ? ListItem(props)?.default : ListItem)?.default,
  }
}
