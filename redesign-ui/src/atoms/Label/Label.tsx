import React, { FC, Fragment } from 'react'

import { Typography } from '../Typography'
import { LabelInterface } from './label.types'
import { Maybe } from '../../helpers/Maybe'

export const Label: FC<LabelInterface> = function Label({
  as,
  required,
  ...propsRest
}) {
  return (
    <Fragment>
      <Typography as="label" {...propsRest} />
      <Maybe check={Boolean(required)}>*</Maybe>
    </Fragment>
  )
}
