import { CoverImageInterface } from './coverImage.types';

export function CoverImageTheme({
  cover,
  parallax,
  position,
  src,
  repeat,
  height,
  width,
}: CoverImageInterface) {
  return {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    background: '#011024',
    backgroundImage: `url("${src}")`,
    height,
    minHeight: '160px',
    width,
    transition: 'all 0.2s ease',
    backgroundAttachment: parallax ? 'fixed' : '',
    backgroundPosition: position ? '50% 50%' : '',
    backgroundSize: cover ? 'cover' : '',
    backgroundRepeat: repeat ? 'no-repeat' : '',
  };
}
