import { ButtonIconInterface } from './buttonIcon.types';

export function buttonIconTheme(props: ButtonIconInterface) {
  const {
    dimension,
    theme: { transition, unit },
  } = props;

  return {
    position: 'relative',
    whiteSpace: 'nowrap',
    transition: transition.easeFast(),
    ...(dimension ? { height: dimension, width: dimension, padding: 0 } : {}),

    '>svg.Icon': {
      ...(dimension
        ? { height: dimension, width: dimension }
        : { transform: 'translateY(4px)' }),
    },

    '>span.ButtonIconContent': {
      display: 'inline-block',
      paddingLeft: unit[2],
    },
  };
}
