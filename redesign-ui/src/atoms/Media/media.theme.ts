import { MediaInterface } from './media.type'


export function mediaTheme({ }: MediaInterface) {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
}

export function mediaFigureTheme({ }: MediaInterface) {
  return {
    position: 'relative',
    width: '100%',
  }
}


export function mediaCaptionTheme({ theme: { color, font, unit } }: MediaInterface) {
  return {
    position: 'absolute',
    bottom: unit[5],
    color: color.white,
    fontSize: font[1],
    fontWeight: 600,
    right: '10px',
  }
}
