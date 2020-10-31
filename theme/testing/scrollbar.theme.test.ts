import { scrollbarTheme } from '../src/scrollbar/scrollbar.theme'
import { theme as testTheme } from './fixtures'
import { PartialScrollbarInterface } from '../src/scrollbar'
import { PartialThemeInterface } from '../src/theme'

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
