import { colorTheme } from '../src/color/color.theme'
import { theme as testTheme } from './fixtures'
import { PartialThemeInterface } from '../src/theme'
import { PartialColorInterface } from '../src/color/color.types'

interface ExtendColorInterface extends PartialColorInterface {
  test: string
}

interface ExtendThemeInterface {
  color: ExtendColorInterface
}

describe('colorTheme', () => {
  it('create color theme', () => {
    const theme: PartialThemeInterface = {
      color: {},
    }

    const actual = colorTheme(theme)
    expect(actual).toEqual(testTheme.color)
  })

  it('create color theme without theme', () => {
    const actual = colorTheme()
    expect(actual).toEqual(testTheme.color)
  })

  it('can overwrite color theme', () => {
    const theme: PartialThemeInterface = {
      color: {
        accent: 'orange',
      },
    }

    const actual = colorTheme(theme)

    expect(actual.accent).toBe('#E67635')
  })

  it('can extend color theme', () => {
    const theme = {
      color: {
        test: 'test',
      },
    }

    const actual = colorTheme<ExtendThemeInterface, ExtendColorInterface>(theme)

    expect(actual.test).toBe('test')
  })
})
