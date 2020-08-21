import { ErrorMessageInterface } from './errorMessage.types';

import { PRIMARY, SECONDARY } from '@redesign/theme';

export function errorMessageTheme({
  theme: { transition, color, unit },
}: ErrorMessageInterface) {
  return {
    color: color.error,
    transition: transition.easeMedium(),
    paddingTop: unit[1],
    paddingBottom: unit[1],
  };
}

export function errorMessageAppearanceTheme({
  appearance,
  theme: { border, color, unit },
}: ErrorMessageInterface) {
  switch (appearance) {
    case SECONDARY:
      return {
        border: border.thinError,
        paddingLeft: unit[2],
        paddingRight: unit[2],
      };

    case PRIMARY:
    default:
      return {
        color: color.text,
        backgroundColor: color.error,
        paddingLeft: unit[2],
        paddingRight: unit[2],
      };
  }
}
