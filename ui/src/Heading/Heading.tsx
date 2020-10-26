import React, { FC } from 'react'

import { HeadingInterface } from './heading.types'
import { Typography, TypographyInterface } from '../Typography'
import {
  headingTheme,
  headingTitleTheme,
  headingSecondaryTitleTheme,
} from './heading.theme'

import { Base, useTheme } from '@redesign-system/ui-core'
import { Maybe } from '../Maybe'
import { isString } from '@redesign-system/theme'
import { Either } from '../Either'

export const Heading: FC<HeadingInterface> = function Heading({
  as = 'div',
  children,
  className = '',
  css = '',
  image,
  secondaryTitle,
  title,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `Heading ${className}`
  const cssList = [headingTheme, css]

  return (
    <Base
      as={as}
      className={classNames}
      css={cssList}
      theme={theme}
      {...propsRest}
    >
      <Maybe check={Boolean(image)}>
        <img {...image} alt={(image as any).alt} />
      </Maybe>

      <Maybe check={Boolean(title)}>
        <Either check={isString(title)}>
          <Typography css={headingTitleTheme}>{title}</Typography>
          <Typography
            css={headingTitleTheme}
            {...(title as TypographyInterface)}
          />
        </Either>
      </Maybe>

      <Maybe check={Boolean(secondaryTitle)}>
        <Either check={isString(secondaryTitle)}>
          <Typography css={headingSecondaryTitleTheme}>
            {secondaryTitle}
          </Typography>
          <Typography
            css={headingSecondaryTitleTheme}
            {...(secondaryTitle as TypographyInterface)}
          />
        </Either>
      </Maybe>
      {children}
    </Base>
  )
}
