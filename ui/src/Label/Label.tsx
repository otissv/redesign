import React, { FC, Fragment } from 'react'

import { Typography } from '../Typography'
import { LabelInterface } from './label.types'
import { Maybe } from '../Maybe'
import { labelTheme } from './label.theme'

export const Label: FC<LabelInterface> = function Label({
  as = 'label',
  className = '',
  css = '',
  required,
  children,
  ...propsRest
}) {
  const classNames = `Label ${className}`
  const cssList = [labelTheme, css]

  return (
    <Fragment>
      <Typography css={cssList} className={classNames} as={as} {...propsRest}>
        {children}
        <Maybe check={Boolean(required)}>*</Maybe>
      </Typography>
    </Fragment>
  )
}
