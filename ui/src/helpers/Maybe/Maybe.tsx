import React, { FC, Fragment } from 'react'
import { MaybeInterface } from './maybe.types'

export const Maybe: FC<MaybeInterface> = function Maybe({
  children,
  check,
  empty = null,
}) {
  if (typeof check !== 'undefined') {
    return check ? (
      <Fragment>{children}</Fragment>
    ) : (
      <Fragment>{empty}</Fragment>
    )
  } else {
    return <Fragment>{children ?? empty}</Fragment>
  }
}
