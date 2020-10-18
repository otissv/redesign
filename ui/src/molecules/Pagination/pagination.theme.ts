import { isFunction } from '@redesign/theme'

import { PaginationInterface } from './pagination.types'

export function paginationTheme(props: PaginationInterface) {
  const {
    theme: { Pagination },
  } = props

  return {
    position: 'relative',
    ...(isFunction(Pagination)
      ? Pagination(props)?.default
      : Pagination?.default),
  }
}
