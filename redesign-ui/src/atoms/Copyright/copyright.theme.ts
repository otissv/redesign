import { CopyrightInterface } from './copyright.types';

export function copyrightTheme({}: CopyrightInterface) {
  return {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: 1,
    textAlign: 'right',
    flex: 'auto',
    justifyContent: 'flex-end',
    width: '100%',

    '@media (min-width: 768px)': {
      width: '50%',
    },
  };
}
