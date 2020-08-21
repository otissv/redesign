import React, { FC } from 'react'
import { SectionInterface } from './section.types'

import { Base, useTheme } from '@redesign/ui-core'
import { Heading, HeadingInterface } from '../Heading'
import { Maybe } from '../../helpers/Maybe'
import { Either } from '../../helpers/Either'
import { isString } from '@redesign/theme'

export const Section: FC<SectionInterface> = function Section({
  as = 'section',
  children,
  heading,
  ...propsRest
}) {
  const { theme } = useTheme()
  return (
    <Base as={as} theme={theme} className="Section" {...propsRest}>
      <Maybe check={Boolean(heading)}>
        <Either check={isString(heading)}>
          <Heading as="h3">{heading as string}</Heading>
          <Heading as="h3" {...(heading as HeadingInterface)} />
        </Either>
      </Maybe>
      {children}
    </Base>
  )
}
