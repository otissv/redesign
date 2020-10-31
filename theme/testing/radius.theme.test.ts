import { radiusTheme } from '../src/radius/radius.theme'
import { theme as testTheme } from './fixtures'
import { PartialRadiusInterface } from '../src/radius/radius.types'
import { PartialThemeInterface } from '../src/theme'

interface ExtendRadiusInterface extends PartialRadiusInterface {
  test: string
}

interface ExtendThemeInterface {
  radius: ExtendRadiusInterface
}

describe('radiusTheme', () => {
  it('create radius theme', () => {
    const theme: PartialThemeInterface = {
      radius: testTheme.radius,
    }

    const actual = radiusTheme(theme)
    expect(actual).toEqual(testTheme.radius)
  })

  it('can overwrite radius theme', () => {
    const theme: PartialThemeInterface = {
      radius: {
        none: 'test',
      },
    }

    const actual = radiusTheme(theme)
    expect(actual.none).toBe('test')
  })

  it('can extend radius theme', () => {
    const theme = {
      radius: {
        test: 'test',
      },
    }

    const actual = radiusTheme<ExtendThemeInterface, ExtendRadiusInterface>(
      theme
    )

    expect(actual.test).toBe('test')
  })
})
