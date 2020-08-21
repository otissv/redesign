import { ThemeComponentInterface, AppearanceBaseTypes } from '@redesign/theme';

export type PositionType =
  | 'fixed'
  | 'absolute'
  | 'sticky'
  | 'static'
  | 'relative';

export interface AppBarInterface extends ThemeComponentInterface {
  appearance?: AppearanceBaseTypes;
  position?: PositionType;
}
