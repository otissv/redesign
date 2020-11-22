import { PartialThemeInterface } from '../theme'
import { borderTheme } from '../border'
import { colorTheme } from '../color'
import { elevateTheme } from '../elevate'
import { fontTheme } from '../font'
import { radiusTheme } from '../radius'
import { scrollbarTheme } from '../scrollbar'
import { transitionTheme } from '../transition'
import { unitTheme } from '../unit'
import { utilityTheme } from '../utility'
import { globalTheme } from '../global'
import { breakpointsTheme, mediaQueriesTheme } from '../mediaQueries'

export function createTheme(partialTheme: Partial<PartialThemeInterface> = {}) {
  const _color = colorTheme(partialTheme)
  const _unit = unitTheme(partialTheme)
  const _breakpoints = breakpointsTheme(partialTheme)

  const defaultTheme = {
    ...partialTheme,
    color: _color,
    unit: _unit,
    breakpoints: _breakpoints,
  }

  const baseTheme = {
    ...defaultTheme,
    border: borderTheme(defaultTheme),
    elevate: elevateTheme(defaultTheme),
    font: fontTheme(defaultTheme),
    mediaQueries: mediaQueriesTheme(defaultTheme),
    radius: radiusTheme(defaultTheme),
    scrollbar: scrollbarTheme(defaultTheme),
    transition: transitionTheme(defaultTheme),
  }

  return {
    ...baseTheme,
    global: globalTheme(baseTheme),
    utility: utilityTheme(baseTheme),
  }
}
