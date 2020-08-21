import { CaptionInterface } from './caption.types';

export function captionTheme({
  theme: { color, font, unit },
}: CaptionInterface) {
  return {
    position: 'absolute',
    right: unit[1],
    bottom: unit[1],
    color: color.white,
    fontSize: font[1],
  };
}
