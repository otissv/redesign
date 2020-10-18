import React, { FC } from 'react'
import { SectionInterface } from './section.types'

import { Base, useTheme } from '@redesign/ui-core'
import { Heading, HeadingInterface } from '../Heading'
import { Maybe } from '../../helpers/Maybe'
import { Either } from '../../helpers/Either'
import { isString } from '@redesign/theme'
import { sectionTheme } from './section.theme'

export const Section: FC<SectionInterface> = function Section({
  as = 'section',
  children,
  heading,
  className = '',
  css = '',
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `Toggle ${Section}`
  const cssList: any = React.useMemo(() => [sectionTheme, css], [
    sectionTheme,
    css,
  ])

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
          <Heading {...(heading as HeadingInterface)} />
        </Either>
      </Maybe>
      {children}
    </Base>
  )
}
