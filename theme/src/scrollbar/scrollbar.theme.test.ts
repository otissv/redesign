import { scrollbarTheme } from './scrollbar.theme'
import { theme as testTheme } from '../../../testing/fixtures'
import { PartialScrollbarInterface } from '../scrollbar'
import { PartialThemeInterface } from '../theme'

interface ExtendScrollbarInterface extends PartialScrollbarInterface {
  test: string
}

interface ExtendThemeInterface {
  scrollbar: ExtendScrollbarInterface
}

describe('scrollbarTheme', () => {
  it('create scrollbar theme', () => {
    const theme: PartialThemeInterface = {
      scrollbar: testTheme.scrollbar,
    }

    const actual = scrollbarTheme(theme)
    expect(actual).toEqual(testTheme.scrollbar)
  })

  it('can overwrite scrollbar theme', () => {
    const theme: PartialThemeInterface = {
      scrollbar: {
        width: 'test',
      },
    }

    const actual = scrollbarTheme(theme)
    expect(actual.width).toBe('test')
  })

  it('can extend scrollbar theme', () => {
    const theme = {
      scrollbar: {
        test: 'test',
      },
    }

    const actual = scrollbarTheme<
      ExtendThemeInterface,
      ExtendScrollbarInterface
    >(theme)

    expect(actual.test).toBe('test')
  })
})
