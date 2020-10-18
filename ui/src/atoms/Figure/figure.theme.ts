import { isFunction } from '@redesign/theme'

import { FigureInterface } from './figure.type'

export function mediaTheme(props: FigureInterface) {
  const {
    theme: { Media },
  } = props

  return {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    ...(isFunction(Media) ? Media(props)?.default : Media?.default),
  }
}

export function mediaFigureTheme(props: FigureInterface) {
  const {
    theme: { MediaFigure },
  } = props
  const media = isFunction(MediaFigure) ? MediaFigure(props) : MediaFigure
  return {
    position: 'relative',
    width: '100%',
    ...media?.figure,
  }
}
