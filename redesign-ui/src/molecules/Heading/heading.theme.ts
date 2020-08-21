import { HeadingInterface } from './heading.types';

export function headingTheme({ theme: { color } }: HeadingInterface) {
  return {
    textTransform: 'uppercase',
    display: 'flex',
    flexDirection: 'column',
    color: color.white,
  };
}

export function headingTitleTheme() {
  return {
    textTransform: 'inherit',
    textAlign: 'left',
    fontSize: '3rem',
    wordBreak: 'keep-all',
  };
}

export function headingSecondaryTitleTheme() {
  return {
    textTransform: 'inherit',
  };
}
