import {
  CssStringType,
  CssFunctionType,
  isFunction,
} from '@redesign-system/theme'

export type CssPropTypes = CssStringType | CssFunctionType

export function cssProps(css: CssPropTypes) {
  return (props: any) =>
    isFunction(css) ? (css as CssFunctionType)(props) : css
}
