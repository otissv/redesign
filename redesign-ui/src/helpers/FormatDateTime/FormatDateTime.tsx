import React, { FC, Fragment, useMemo } from 'react'

import { Base, useTheme } from '@redesign/ui-core'

import * as dateFns from 'date-fns'

import { FormatDateTimeInterface } from './formatDateTime.types'

import {
  formatDateTimeTheme,
  formatDateTimeAppearanceTheme,
} from './formatDateTime.theme'

import { Maybe } from '../Maybe'
// export function FormatDateTime({ date, format: ft = "d MMM u", ...propsRest }) {
//   function isValidDate(date) {
//     return (
//       date &&
//       Object.prototype.toString.call(date) === "[object Date]" &&
//       !isNaN(date)
//     )
//   }

//   const dateObj = parseISO(date)

//   const dateStr = isValidDate(dateObj)
//     ?useMemo(() => format(dateObj, ft), [format, date])
//     : null

//   return <FormatDateTimeStyled {...propsRest}>{dateStr}</FormatDateTimeStyled>
// }

export const FormatDateTime: FC<FormatDateTimeInterface> = function Badge({
  as = 'span',
  className = '',
  date,
  format: ft = 'd MMM u',
  options,
  css = '',
  ...propsRest
}) {
  const { format, parseISO } = dateFns
  const { theme } = useTheme()
  const classNames = useMemo(() => `FormatDateTime ${className}`, [className])
  const cssList: any = useMemo(
    () => [formatDateTimeTheme, formatDateTimeAppearanceTheme, css],
    [formatDateTimeTheme, formatDateTimeAppearanceTheme, css]
  )

  function isValidDate(date: any) {
    return (
      date &&
      Object.prototype.toString.call(date) === '[object Date]' &&
      !isNaN(date)
    )
  }

  const dateObj = parseISO(date)

  const dateMemo = useMemo(() => format(dateObj, ft, options), [
    format,
    date,
    options,
  ])

  return (
    <Base
      as={as}
      className={classNames}
      theme={theme}
      css={cssList}
      {...propsRest}
    >
      <Maybe check={isValidDate(dateObj)}>
        <Fragment>{dateMemo}</Fragment>
      </Maybe>
    </Base>
  )
}
