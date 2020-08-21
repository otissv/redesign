import { ButtonGroupInterface } from './buttonGroup.types';

export function buttonGroupTheme({
  stacked,
  theme: { transition },
}: ButtonGroupInterface) {
  return {
    display: 'inline-flex',
    position: 'relative',
    transition: transition.easeMedium(),
    verticalAlign: 'middle',
    flexDirection: stacked ? 'column' : 'row',
  };
}

export function buttonStretchGroupTheme({ stretch }: ButtonGroupInterface) {
  return stretch ? { width: '100%' } : {};
}
