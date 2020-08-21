import React, { FC, Fragment } from 'react'
import { EitherInterface } from './either.types'

export const Either: FC<EitherInterface> = function Maybe({ children, check }) {
  switch (true) {
    case check == null:
      return null
    case Array.isArray(children) && children?.length > 0:
      return Boolean(check) ? (
        <Fragment>{children[0]}</Fragment>
      ) : (
        <Fragment>{children[1] ?? null}</Fragment>
      )

    default:
      return <Fragment>{children ?? null}</Fragment>
  }
}
