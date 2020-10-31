import { borderTheme } from '../src/border/border.theme'
import { theme as testTheme } from './fixtures'
import { PartialThemeInterface } from '../src/theme'
import { PartialBorderInterface } from '../src/border'

interface ExtendBorderInterface extends PartialBorderInterface {
  test: string
}

interface ExtendThemeInterface {
  border: ExtendBorderInterface
}

describe('borderTheme', () => {
  it('create border theme', () => {
    const theme: PartialThemeInterface = {
      color: testTheme.color,
      unit: testTheme.unit,
    }
    const actual = borderTheme(theme)
    expect(actual).toEqual(testTheme.border)
  })

  it('can overwrite border theme', () => {
    const thickWidth = '100px'

    const theme: PartialThemeInterface = {
      color: testTheme.color,
      unit: testTheme.unit,
      border: {
        thickWidth,
      },
    }
    const actual = borderTheme(theme).thickWidth
    expect(actual).toBe(thickWidth)
  })

  it('can extend border theme', () => {
    const test = '99px dash #fff'

    const theme = {
      color: testTheme.color,
      unit: testTheme.unit,
      border: {
        test,
      },
    }

    const actual = borderTheme<ExtendThemeInterface, ExtendBorderInterface>(
      theme
    )

    expect(actual.test).toBe(test)
  })
})
