import React, { FC } from 'react'
import { isString } from '@redesign-system/theme'
import { Base, useTheme } from '@redesign-system/ui-core'

import { SectionInterface } from './section.types'
import { Heading, HeadingInterface } from '../Heading'
import { Maybe } from '../Maybe'
import { Either } from '../Either'
import { sectionTheme } from './section.theme'
import { TypographyInterface } from '../Typography'

export const Section: FC<SectionInterface> = function Section({
  as = 'section',
  children,
  heading,
  className = '',
  css = '',
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `Section ${className}`
  const cssList = [sectionTheme, css]

  return (
    <Base
      as={as}
      theme={theme}
      css={cssList}
      className={classNames}
      {...propsRest}
    >
      <Maybe check={Boolean(heading)}>
        <Either check={isString(heading)}>
          <Heading as="h3">{heading as string}</Heading>
          <Heading
            {...(heading as HeadingInterface)}
            title={{
              as: 'h3',
              ...(((heading as HeadingInterface)?.title as TypographyInterface)
                ? {
                    ...((heading as HeadingInterface)
                      ?.title as TypographyInterface),
                  }
                : {}),
            }}
          />
        </Either>
      </Maybe>
      {children}
    </Base>
  )
}
