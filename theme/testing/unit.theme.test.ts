import { unitTheme } from '../src/unit/unit.theme'
import { theme as testTheme } from './fixtures'
import { PartialThemeInterface } from '../src/theme'
import { PartialUnitInterface } from '../src/unit/unit.types'

interface ExtendUnitInterface extends PartialUnitInterface {
  test: string
}

interface ExtendThemeInterface {
  unit: ExtendUnitInterface
}

describe('unitTheme', () => {
  it('create unit theme', () => {
    const theme: PartialThemeInterface = {
      unit: testTheme.unit,
    }

    const actual = unitTheme(theme)
    expect(actual).toEqual(testTheme.unit)
  })

  it('can overwrite unit theme', () => {
    const theme: PartialThemeInterface = {
      unit: {
        0: 'test',
      },
    }

    const actual = unitTheme(theme)
    expect(actual[0]).toBe('test')
  })

  it('can extend unit theme', () => {
    const theme = {
      unit: {
        test: 'test',
      },
    }

    const actual = unitTheme<ExtendThemeInterface, ExtendUnitInterface>(theme)

    expect(actual.test).toBe('test')
  })
})
