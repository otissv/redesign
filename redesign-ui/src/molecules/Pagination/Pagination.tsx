import React, { FC, useMemo } from 'react'

import { PaginationInterface } from './pagination.types'

import { Base, useTheme } from '@redesign/ui-core'
import { paginationTheme } from './pagination.theme'
import { Button } from '../../atoms/Button'
import { noop, ACTIVE, DISABLED } from '@redesign/theme'

export function createPageNumbers({ currentPage, onPageClick, total }: any) {
  switch (true) {
    case currentPage <= 5:
      return [1, 2, 3, 4, 5].map(n => {
        return (
          <Button
            key={n}
            onClick={onPageClick}
            data-page={n}
            appearance={n === currentPage ? ACTIVE : undefined}
          >
            {n}
          </Button>
        )
      })
    case currentPage >= total - 4:
      return [total - 4, total - 3, total - 2, total - 1, total].map(n => {
        return (
          <Button
            key={n}
            onClick={onPageClick}
            data-page={n}
            appearance={n === currentPage ? ACTIVE : undefined}
          >
            {n}
          </Button>
        )
      })
    case currentPage > 5 && currentPage < total - 4:
      return [
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
      ].map(n => {
        return (
          <Button
            key={n}
            onClick={onPageClick}
            data-page={n}
            appearance={n === currentPage ? ACTIVE : undefined}
          >
            {n}
          </Button>
        )
      })
    default:
      return []
  }
}

export const Pagination: FC<PaginationInterface> = function Pagination({
  as = 'div',
  children,
  className = '',
  css = '',
  currentPage = 1,
  size = 20,
  total,
  pageSize = [20, 50, 100],
  onPrevious = noop,
  onNext = noop,
  onToStart = noop,
  onToEnd = noop,
  onPageClick = noop,
  ...propsRest
}) {
  const { theme } = useTheme()
  const cssList: any = useMemo(() => [paginationTheme, css], [
    paginationTheme,
    css,
  ])
  const classNames = useMemo(() => `TableBody ${className}`, [className])

  let pageNumbers = createPageNumbers({ currentPage, onPageClick, total })

  return (
    <Base
      as={as}
      className={classNames}
      css={cssList}
      theme={theme}
      {...propsRest}
    >
      <Button
        onClick={onToStart}
        appearance={currentPage === 1 ? DISABLED : undefined}
      >
        {'|<'}
      </Button>
      <Button
        onClick={onPrevious}
        appearance={currentPage === 1 ? DISABLED : undefined}
      >
        {'<'}
      </Button>
      {pageNumbers}
      <Button
        onClick={onNext}
        appearance={currentPage === total ? DISABLED : undefined}
      >
        {'>'}
      </Button>
      <Button
        onClick={onToEnd}
        appearance={currentPage === total ? DISABLED : undefined}
      >
        {'>|'}
      </Button>
      {children} {currentPage} - {size * currentPage} of {total} items
    </Base>
  )
}
