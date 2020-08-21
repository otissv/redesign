import { OverlayInterface } from './overlay.types';

export function overlayTheme({ color: hostColor }: OverlayInterface) {
  return {
    background: hostColor || '#01102420',
    position: 'absolute',
    width: 'inherit',
    height: 'inherit',
  };
}
