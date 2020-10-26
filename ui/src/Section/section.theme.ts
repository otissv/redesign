import { isFunction } from '@redesign-system/theme'

import { SectionInterface } from './section.types'

export function sectionTheme(props: SectionInterface) {
  const {
    theme: { Section },
  } = props

  return {
    position: 'relative',
    padding: '10px 12px',
    display: 'flex',
    flexDirection: 'column',
    ...(isFunction(Section) ? Section(props)?.default : Section?.default),
  }
}
