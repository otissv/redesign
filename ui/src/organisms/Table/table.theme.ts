import { isFunction } from '@redesign-system/theme'

import { TableInterface } from './table.types'

export function tableTheme(props: TableInterface) {
  const {
    // condensed,
    // hover,
    theme: {
      //  transition, border, color, elevate, unit,
      Table,
    },
  } = props

  return {
    ...(isFunction(Table) ? Table(props)?.default : Table?.default),
  }
}
