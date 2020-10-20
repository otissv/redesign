import {
  DISABLED,
  PRIMARY_DISABLED,
  SECONDARY_DISABLED,
  TERTIARY_DISABLED,
  AppearanceTypes,
} from '@redesign-system/theme';

interface PropsInterface {
  disabled?: boolean;
  appearance?: AppearanceTypes;
  [key: string]: any;
}

export function isComponentDisabled({ appearance, disabled }: PropsInterface) {
  return disabled ||
    appearance === DISABLED ||
    appearance === PRIMARY_DISABLED ||
    appearance === SECONDARY_DISABLED ||
    appearance === TERTIARY_DISABLED
    ? true
    : undefined;
}
