import { AppearanceTypes } from '../appearance'
import { BorderInterface } from '../border'
import { ColorInterface } from '../color'
import { ElevateInterface } from '../elevate'
import { FontInterface } from '../font'
import { RadiusInterface } from '../radius'
import { ScrollbarInterface } from '../scrollbar'
import { UtilityInterface } from '../utility/utility.types'
import { SwatchesInterface } from '../swatches/swatches.types'
import { TransitionInterface } from '../transition'
import { UnitInterface } from '../unit'
import { GlobalInterface } from '../global'
import { MediaQueriesInterface } from '../mediaQueries'

export type CssStringType = string
export type CssObjectType = { [key: string]: any }
export type CssFunctionType = (
  props: ThemeInterface | any
) => { [key: string]: any } | string
export type CssFunctionArrayType = Array<CssFunctionType | CssStringType>

export type CssTypes =
  | CssStringType
  | CssObjectType
  | CssFunctionType
  | CssFunctionArrayType

export interface ThemeInterface {
  border: BorderInterface
  color: ColorInterface
  elevate: ElevateInterface
  font: FontInterface
  mediaQueries: MediaQueriesInterface
  radius: RadiusInterface
  scrollbar: ScrollbarInterface
  utility: UtilityInterface
  swatches: SwatchesInterface
  transition: TransitionInterface
  unit: UnitInterface
  global: GlobalInterface
}

export interface PartialThemeInterface {
  border?: Partial<BorderInterface>
  color?: Partial<ColorInterface>
  elevate?: Partial<ElevateInterface>
  font?: Partial<FontInterface>
  radius?: Partial<RadiusInterface>
  mediaQueries?: Partial<MediaQueriesInterface>
  scrollbar?: Partial<ScrollbarInterface>
  utility?: Partial<UtilityInterface>
  swatches?: Partial<SwatchesInterface>
  transition?: Partial<TransitionInterface>
  unit?: Partial<UnitInterface>
  global?: Partial<GlobalInterface>
}

export interface ThemeComponentInterface {
  appearance?: AppearanceTypes
  as?: string
  className?: string
  css?: CssTypes
  theme?: any
  match?: boolean
  [key: string]: any
}
