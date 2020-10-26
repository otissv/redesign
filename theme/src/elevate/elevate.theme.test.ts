import { elevateTheme } from './elevate.theme'
import { theme as testTheme } from '../../../testing/fixtures'
import { PartialElevateInterface } from '../elevate'
import { PartialThemeInterface } from '../theme'

interface ExtendElevateInterface extends PartialElevateInterface {
  test: string
}

interface ExtendThemeInterface {
  elevate: ExtendElevateInterface
}

describe('elevateTheme', () => {
  it('create elevate theme', () => {
    const theme: PartialThemeInterface = {
      elevate: testTheme.elevate,
      unit: testTheme.unit,
    }

    const actual = elevateTheme(theme)
    expect(actual).toEqual(testTheme.elevate)
  })

  it('can overwrite elevate theme', () => {
    const theme: PartialThemeInterface = {
      elevate: {
        5: 'test',
      },
    }

    const actual = elevateTheme(theme)
    expect(actual[5]).toBe('test')
  })

  it('can extend elevate theme', () => {
    const theme = {
      elevate: {
        test: 'test6',
      },
    }

    const actual = elevateTheme<ExtendThemeInterface, ExtendElevateInterface>(
      theme
    )

    expect(actual.test).toBe('test6')
  })
})
