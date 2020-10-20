import {
  PRIMARY,
  ACCENT,
  ACTIVE,
  ACTION,
  DANGER,
  ERROR,
  SUCCESS,
  WARNING,
  DISABLED,
  ColorInterface,
  AppearanceBaseTypes,
} from '@redesign-system/theme';

interface GetAppearanceInterface {
  appearance: AppearanceBaseTypes | undefined;
  color: ColorInterface;
}

export function getBackgroundColor({
  appearance,
  color,
}: GetAppearanceInterface) {
  switch (appearance) {
    case ACCENT: {
      return {
        background: color.accent_600,
        '&:hover': {
          background: color.accent_500,
        },
        '&:focus': {
          background: color.accent_700,
        },
        '&:active': {
          background: color.accent_700,
        },
      };
    }

    case ACTIVE: {
      return {
        background: color.active_600,
        '&:hover': {
          background: color.active_500,
        },
        '&:focus': {
          background: color.active_700,
        },
        '&:active': {
          background: color.active_600,
        },
      };
    }

    case ACTION: {
      return {
        background: color.action_600,
        '&:hover': {
          background: color.action_500,
        },
        '&:focus': {
          background: color.action_700,
        },
        '&:active': {
          background: color.action_700,
        },
      };
    }

    case DANGER: {
      return {
        background: color.danger_600,
        '&:hover': {
          background: color.danger_500,
        },
        '&:focus': {
          background: color.danger_700,
        },
        '&:active': {
          background: color.danger_700,
        },
      };
    }

    case ERROR: {
      return {
        background: color.error_600,
        '&:hover': {
          background: color.error_500,
        },
        '&:focus': {
          background: color.error_700,
        },
        '&:active': {
          background: color.error_700,
        },
      };
    }

    case SUCCESS: {
      return {
        background: color.success_600,
        '&:hover': {
          background: color.success_500,
        },
        '&:focus': {
          background: color.success_700,
        },
        '&:active': {
          background: color.success_700,
        },
      };
    }

    case WARNING: {
      return {
        background: color.warning_600,
        '&:hover': {
          background: color.warning_500,
        },
        '&:focus': {
          background: color.warning_700,
        },
        '&:active': {
          background: color.warning_700,
        },
      };
    }

    case DISABLED: {
      return {
        background: color.disabled,

        '&:active': {
          background: color.disabled,
        },
        '&:focus': {
          background: color.disabled,
        },
        '&:hover': {
          background: color.disabled,
        },
      };
    }

    case PRIMARY:
    default:
      return {
        background: color.grey_600,
        '&:hover': {
          background: color.grey_500,
        },
        '&:focus': {
          background: color.grey_700,
        },
        '&:active': {
          background: color.grey_700,
        },
      };
  }
}
