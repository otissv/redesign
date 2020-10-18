import { isFunction } from '@redesign/theme'

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
