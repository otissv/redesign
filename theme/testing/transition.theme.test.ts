import {
  easeTransition,
  transitionTheme,
} from '../src/transition/transition.theme'
import { theme as testTheme } from './fixtures'
import { PartialThemeInterface } from '../src/theme'
import { PartialTransitionInterface } from '../src/transition'

interface ExtendTransitionInterface extends PartialTransitionInterface {
  test: string
}

interface ExtendThemeInterface {
  transition: ExtendTransitionInterface
}

describe('transitionTheme', () => {
  it('create transition theme', () => {
    const theme: PartialThemeInterface = {
      transition: testTheme.transition as PartialTransitionInterface,
    }

    const actual = transitionTheme(theme)
    expect(actual).toEqual(testTheme.transition)
  })

  it('can overwrite transition theme', () => {
    const theme: PartialThemeInterface = {
      transition: {
        0: 'test',
      },
    }

    const actual = transitionTheme(theme)
    expect(actual[0]).toBe('test')
  })

  it('can extend transition theme', () => {
    const theme = {
      transition: {
        test: 'test',
      },
    }

    const actual = transitionTheme<
      ExtendThemeInterface,
      ExtendTransitionInterface
    >(theme)

    expect(actual.test).toBe('test')
  })

  it('transition ease', () => {
    const theme = {
      transition: {
        test: 'test',
      },
    }

    const actual = transitionTheme<
      ExtendThemeInterface,
      ExtendTransitionInterface
    >(theme)

    expect(actual.easeFast && actual.easeFast()).toBe('all 0.1s ease ')
    expect(actual.easeMedium && actual.easeMedium()).toBe('all 0.3s ease ')
    expect(actual.easeSlow && actual.easeSlow()).toBe('all 0.5s ease ')
    expect(actual.easeXslow && actual.easeXslow()).toBe('all 3s ease ')

    expect(actual.easeInFast && actual.easeInFast()).toBe('all 0.1s ease-in ')
    expect(actual.easeInMedium && actual.easeInMedium()).toBe(
      'all 0.3s ease-in '
    )
    expect(actual.easeInSlow && actual.easeInSlow()).toBe('all 0.5s ease-in ')
    expect(actual.easeInXslow && actual.easeInXslow()).toBe('all 3s ease-in ')

    expect(actual.easeOutFast && actual.easeOutFast()).toBe(
      'all 0.1s ease-out '
    )
    expect(actual.easeOutMedium && actual.easeOutMedium()).toBe(
      'all 0.3s ease-out '
    )
    expect(actual.easeOutSlow && actual.easeOutSlow()).toBe(
      'all 0.5s ease-out '
    )
    expect(actual.easeOutXslow && actual.easeOutXslow()).toBe(
      'all 3s ease-out '
    )

    expect(actual.easeInOutFast && actual.easeInOutFast()).toBe(
      'all 0.1s ease-in-out '
    )
    expect(actual.easeInOutMedium && actual.easeInOutMedium()).toBe(
      'all 0.3s ease-in-out '
    )
    expect(actual.easeInOutSlow && actual.easeInOutSlow()).toBe(
      'all 0.5s ease-in-out '
    )
    expect(actual.easeInOutXslow && actual.easeInOutXslow()).toBe(
      'all 3s ease-in-out '
    )
  })

  it('easeTransition props', () => {
    expect(easeTransition()).toBe('all 0.3s ease ')
    expect(easeTransition({ delay: '100' })).toBe('all 0.3s ease 100')
    expect(easeTransition({ property: 'color' })).toBe('color 0.3s ease ')
    expect(easeTransition({ speed: '10s' })).toBe('all 10s ease ')
    expect(easeTransition({ ease: 'ease-in' })).toBe('all 0.3s ease-in ')

    expect(
      easeTransition({
        delay: '100',
        property: 'color',
        speed: '10s',
        ease: 'ease-in',
      })
    ).toBe('color 10s ease-in 100')
  })
})
