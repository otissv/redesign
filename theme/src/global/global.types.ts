import { ThemeInterface } from '../theme';

export interface GlobalInterface {
  [key: string]: any;
}

export interface GlobalStylesInterface {
  css?: any;
  theme: Partial<ThemeInterface>;
}

export interface PartialGlobalInterface extends Partial<GlobalInterface> {}
