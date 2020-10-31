import {
  utilityTheme,
  isValidStringValue,
  isValidNumberValue,
  isValidUnitValue,
  getRadiuses,
  unitPositions,
  allPositions,
} from '../src/utility/utility.theme'
import { theme as testTheme, utilityTestTheme } from './fixtures'
import { PartialUtilityInterface } from '../src/utility/utility.types'
import { PartialThemeInterface } from '../src/theme'

interface ExtendUtilityInterface extends PartialUtilityInterface {
  test: string
}

interface ExtendThemeInterface {
  utility: ExtendUtilityInterface
}

describe('utilityTheme', () => {
  it('margin - utility theme', () => {
    const theme = utilityTestTheme as PartialThemeInterface
    const actual: any = utilityTheme(theme)

    expect(actual.margin && actual.margin('100%')).toEqual({ margin: '100%' })
    expect(actual.margin && actual.margin('default')).toEqual({
      margin: '24px',
    })
    expect(actual.margin(0)).toEqual({
      margin: '0px',
    })

    expect(actual.marginRight('100%')).toEqual({
      marginRight: '100%',
    })
    expect(actual.marginRight('default')).toEqual({
      marginRight: '24px',
    })
    expect(actual.marginRight(0)).toEqual({
      marginRight: '0px',
    })

    expect(actual.marginLeft('100%')).toEqual({
      marginLeft: '100%',
    })
    expect(actual.marginLeft && actual.marginLeft('default')).toEqual({
      marginLeft: '24px',
    })
    expect(actual.marginLeft(0)).toEqual({
      marginLeft: '0px',
    })

    expect(actual.marginX('100%')).toEqual({
      marginRight: '100%',
      marginLeft: '100%',
    })
    expect(actual.marginX('default')).toEqual({
      marginRight: '24px',
      marginLeft: '24px',
    })
    expect(actual.marginX(0)).toEqual({
      marginRight: '0px',
      marginLeft: '0px',
    })

    expect(actual.marginY('100%')).toEqual({
      marginBottom: '100%',
      marginTop: '100%',
    })
    expect(actual.marginY('default')).toEqual({
      marginBottom: '24px',
      marginTop: '24px',
    })
    expect(actual.marginY(0)).toEqual({
      marginBottom: '0px',
      marginTop: '0px',
    })

    expect(actual.margin0('left right top bottom')).toEqual({
      marginBottom: '0px',
      marginLeft: '0px',
      marginRight: '0px',
      marginTop: '0px',
    })
    expect(actual.margin1('left right top bottom')).toEqual({
      marginBottom: '4px',
      marginLeft: '4px',
      marginRight: '4px',
      marginTop: '4px',
    })
    expect(actual.margin2('left right top bottom')).toEqual({
      marginBottom: '8px',
      marginLeft: '8px',
      marginRight: '8px',
      marginTop: '8px',
    })
    expect(actual.margin3('left right top bottom')).toEqual({
      marginBottom: '12px',
      marginLeft: '12px',
      marginRight: '12px',
      marginTop: '12px',
    })
    expect(actual.margin4('left right top bottom')).toEqual({
      marginBottom: '16px',
      marginLeft: '16px',
      marginRight: '16px',
      marginTop: '16px',
    })
    expect(actual.margin5('left right top bottom')).toEqual({
      marginBottom: '24px',
      marginLeft: '24px',
      marginRight: '24px',
      marginTop: '24px',
    })
    expect(actual.margin6('left right top bottom')).toEqual({
      marginBottom: '32px',
      marginLeft: '32px',
      marginRight: '32px',
      marginTop: '32px',
    })
    expect(actual.margin7('left right top bottom')).toEqual({
      marginBottom: '48px',
      marginLeft: '48px',
      marginRight: '48px',
      marginTop: '48px',
    })
    expect(actual.margin8('left right top bottom')).toEqual({
      marginBottom: '64px',
      marginLeft: '64px',
      marginRight: '64px',
      marginTop: '64px',
    })
    expect(actual.margin9('left right top bottom')).toEqual({
      marginBottom: '96px',
      marginLeft: '96px',
      marginRight: '96px',
      marginTop: '96px',
    })
    expect(actual.margin10('left right top bottom')).toEqual({
      marginBottom: '128px',
      marginLeft: '128px',
      marginRight: '128px',
      marginTop: '128px',
    })
  })

  it('padding - utility theme', () => {
    const theme = utilityTestTheme as PartialThemeInterface
    const actual: any = utilityTheme(theme)

    expect(actual.padding('100%')).toEqual({
      padding: '100%',
    })
    expect(actual.padding('default')).toEqual({
      padding: '24px',
    })
    expect(actual.padding(0)).toEqual({
      padding: '0px',
    })

    expect(actual.paddingRight('100%')).toEqual({
      paddingRight: '100%',
    })
    expect(actual.paddingRight('default')).toEqual({
      paddingRight: '24px',
    })
    expect(actual.paddingRight(0)).toEqual({
      paddingRight: '0px',
    })

    expect(actual.paddingLeft('100%')).toEqual({
      paddingLeft: '100%',
    })
    expect(actual.paddingLeft('default')).toEqual({
      paddingLeft: '24px',
    })
    expect(actual.paddingLeft(0)).toEqual({
      paddingLeft: '0px',
    })

    expect(actual.paddingX('100%')).toEqual({
      paddingRight: '100%',
      paddingLeft: '100%',
    })
    expect(actual.paddingX('default')).toEqual({
      paddingRight: '24px',
      paddingLeft: '24px',
    })
    expect(actual.paddingX(0)).toEqual({
      paddingRight: '0px',
      paddingLeft: '0px',
    })

    expect(actual.paddingY('100%')).toEqual({
      paddingBottom: '100%',
      paddingTop: '100%',
    })
    expect(actual.paddingY('default')).toEqual({
      paddingBottom: '24px',
      paddingTop: '24px',
    })
    expect(actual.paddingY(0)).toEqual({
      paddingBottom: '0px',
      paddingTop: '0px',
    })

    expect(actual.padding0('left right top bottom')).toEqual({
      paddingBottom: '0px',
      paddingLeft: '0px',
      paddingRight: '0px',
      paddingTop: '0px',
    })
    expect(actual.padding1('left right top bottom')).toEqual({
      paddingBottom: '4px',
      paddingLeft: '4px',
      paddingRight: '4px',
      paddingTop: '4px',
    })
    expect(actual.padding2('left right top bottom')).toEqual({
      paddingBottom: '8px',
      paddingLeft: '8px',
      paddingRight: '8px',
      paddingTop: '8px',
    })
    expect(actual.padding3('left right top bottom')).toEqual({
      paddingBottom: '12px',
      paddingLeft: '12px',
      paddingRight: '12px',
      paddingTop: '12px',
    })
    expect(actual.padding4('left right top bottom')).toEqual({
      paddingBottom: '16px',
      paddingLeft: '16px',
      paddingRight: '16px',
      paddingTop: '16px',
    })
    expect(actual.padding5('left right top bottom')).toEqual({
      paddingBottom: '24px',
      paddingLeft: '24px',
      paddingRight: '24px',
      paddingTop: '24px',
    })
    expect(actual.padding6('left right top bottom')).toEqual({
      paddingBottom: '32px',
      paddingLeft: '32px',
      paddingRight: '32px',
      paddingTop: '32px',
    })
    expect(actual.padding7('left right top bottom')).toEqual({
      paddingBottom: '48px',
      paddingLeft: '48px',
      paddingRight: '48px',
      paddingTop: '48px',
    })
    expect(actual.padding8('left right top bottom')).toEqual({
      paddingBottom: '64px',
      paddingLeft: '64px',
      paddingRight: '64px',
      paddingTop: '64px',
    })
    expect(actual.padding9('left right top bottom')).toEqual({
      paddingBottom: '96px',
      paddingLeft: '96px',
      paddingRight: '96px',
      paddingTop: '96px',
    })
    expect(actual.padding10('left right top bottom')).toEqual({
      paddingBottom: '128px',
      paddingLeft: '128px',
      paddingRight: '128px',
      paddingTop: '128px',
    })
  })

  // it('margin - utility theme', () => {
  //   const theme = utilityTestTheme as PartialThemeInterface;

  //   const actual = utilityTheme(theme);

  //   expect(actual.margin && actual.margin('100%')).toEqual({ margin: '100%' });
  //   expect(actual.margin && actual.margin('default')).toEqual({
  //     margin: '24px',
  //   });
  //   expect(actual.margin && actual.margin(0)).toEqual({
  //     margin: '0px',
  //   });

  //   console.log(actual);

  //   // actual.mr && actual.mr('100%');
  //   // console.log();

  //   // expect(actual.mr && actual.mr('100%')).toEqual({
  //   //   marginRight: '100%',
  //   // });
  //   // expect(actual.mr && actual.mr('default')).toEqual({
  //   //   marginRight: '24px',
  //   // });
  //   // expect(actual.mr && actual.mr(0)).toEqual({
  //   //   marginRight: '0px',
  //   // });

  //   // expect(actual.ml && actual.ml('100%')).toEqual({
  //   //   marginLeft: '100%',
  //   // });
  //   // expect(actual.ml && actual.ml('default')).toEqual({
  //   //   marginLeft: '24px',
  //   // });
  //   // expect(actual.ml && actual.ml(0)).toEqual({
  //   //   marginLeft: '0px',
  //   // });

  //   // expect(actual.mx && actual.mx('100%')).toEqual({
  //   //   marginRight: '100%',
  //   //   marginLeft: '100%',
  //   // });
  //   // expect(actual.mx && actual.mx('default')).toEqual({
  //   //   marginRight: '24px',
  //   //   marginLeft: '24px',
  //   // });
  //   // expect(actual.mx && actual.mx(0)).toEqual({
  //   //   marginRight: '0px',
  //   //   marginLeft: '0px',
  //   // });

  //   // expect(actual.my && actual.my('100%')).toEqual({
  //   //   marginBottom: '100%',
  //   //   marginTop: '100%',
  //   // });
  //   // expect(actual.my && actual.my('default')).toEqual({
  //   //   marginBottom: '24px',
  //   //   marginTop: '24px',
  //   // });
  //   // expect(actual.my && actual.my(0)).toEqual({
  //   //   marginBottom: '0px',
  //   //   marginTop: '0px',
  //   // });

  //   // expect(actual.m0 && actual.m0('left right top bottom')).toEqual({
  //   //   marginBottom: '0px',
  //   //   marginLeft: '0px',
  //   //   marginRight: '0px',
  //   //   marginTop: '0px',
  //   // });
  //   // expect(actual.m1 && actual.m1('left right top bottom')).toEqual({
  //   //   marginBottom: '4px',
  //   //   marginLeft: '4px',
  //   //   marginRight: '4px',
  //   //   marginTop: '4px',
  //   // });
  //   // expect(actual.m2 && actual.m2('left right top bottom')).toEqual({
  //   //   marginBottom: '8px',
  //   //   marginLeft: '8px',
  //   //   marginRight: '8px',
  //   //   marginTop: '8px',
  //   // });
  //   // expect(actual.m3 && actual.m3('left right top bottom')).toEqual({
  //   //   marginBottom: '12px',
  //   //   marginLeft: '12px',
  //   //   marginRight: '12px',
  //   //   marginTop: '12px',
  //   // });
  //   // expect(actual.m4 && actual.m4('left right top bottom')).toEqual({
  //   //   marginBottom: '16px',
  //   //   marginLeft: '16px',
  //   //   marginRight: '16px',
  //   //   marginTop: '16px',
  //   // });
  //   // expect(actual.m5 && actual.m5('left right top bottom')).toEqual({
  //   //   marginBottom: '24px',
  //   //   marginLeft: '24px',
  //   //   marginRight: '24px',
  //   //   marginTop: '24px',
  //   // });
  //   // expect(actual.m6 && actual.m6('left right top bottom')).toEqual({
  //   //   marginBottom: '32px',
  //   //   marginLeft: '32px',
  //   //   marginRight: '32px',
  //   //   marginTop: '32px',
  //   // });
  //   // expect(actual.m7 && actual.m7('left right top bottom')).toEqual({
  //   //   marginBottom: '48px',
  //   //   marginLeft: '48px',
  //   //   marginRight: '48px',
  //   //   marginTop: '48px',
  //   // });
  //   // expect(actual.m8 && actual.m8('left right top bottom')).toEqual({
  //   //   marginBottom: '64px',
  //   //   marginLeft: '64px',
  //   //   marginRight: '64px',
  //   //   marginTop: '64px',
  //   // });
  //   // expect(actual.m9 && actual.m9('left right top bottom')).toEqual({
  //   //   marginBottom: '96px',
  //   //   marginLeft: '96px',
  //   //   marginRight: '96px',
  //   //   marginTop: '96px',
  //   // });
  //   // expect(actual.m10 && actual.m10('left right top bottom')).toEqual({
  //   //   marginBottom: '128px',
  //   //   marginLeft: '128px',
  //   //   marginRight: '128px',
  //   //   marginTop: '128px',
  //   // });
  // });

  it('can overwrite utility theme', () => {
    const theme: PartialThemeInterface = {
      utility: {
        radius: (_value: string) => ({ borderRadius: '99px' }),
      },
    }

    const actual = utilityTheme(theme)
    expect(actual.radius && actual.radius('circle')).toEqual({
      borderRadius: '99px',
    })
  })

  it('can extend utility theme', () => {
    const theme = {
      utility: {
        test: 'test',
      },
    }

    const actual = utilityTheme<ExtendThemeInterface, ExtendUtilityInterface>(
      theme
    )

    expect(actual.test).toBe('test')
  })

  it('isValidStringValue returns true if valid string', () => {
    expect(isValidStringValue('test')).toBe(true)
  })

  it('isValidStringValue returns false if empty string', () => {
    expect(isValidStringValue('')).toBe(false)
  })

  it('isValidStringValue returns false number', () => {
    expect(isValidStringValue(1)).toBe(false)
  })

  it('isValidStringValue returns false if undefined', () => {
    expect(isValidStringValue(undefined)).toBe(false)
  })

  it('isValidStringValue returns false if null', () => {
    expect(isValidStringValue(null)).toBe(false)
  })

  it('isValidStringValue returns false if false', () => {
    expect(isValidStringValue(true)).toBe(false)
  })

  it('isValidStringValue returns false if true', () => {
    expect(isValidStringValue(false)).toBe(false)
  })

  it('isValidNumberValue returns true if valid number', () => {
    expect(isValidNumberValue(1)).toBe(true)
  })

  it('isValidNumberValue returns false empty string', () => {
    expect(isValidNumberValue('')).toBe(false)
  })

  it('isValidNumberValue returns false empty string', () => {
    expect(isValidNumberValue('test')).toBe(false)
  })

  it('isValidNumberValue returns false if undefined', () => {
    expect(isValidNumberValue(undefined)).toBe(false)
  })

  it('isValidNumberValue returns false if null', () => {
    expect(isValidNumberValue(null)).toBe(false)
  })

  it('isValidNumberValue returns false if false', () => {
    expect(isValidNumberValue(true)).toBe(false)
  })

  it('isValidNumberValue returns false if true', () => {
    expect(isValidNumberValue(false)).toBe(false)
  })

  it('isValidUnitValue returns %', () => {
    expect(isValidUnitValue('%')).toBe(true)
  })

  it('isValidUnitValue returns px', () => {
    expect(isValidUnitValue('px')).toBe(true)
  })

  it('isValidUnitValue returns rem', () => {
    expect(isValidUnitValue('rem')).toBe(true)
  })

  it('isValidUnitValue returns px', () => {
    expect(isValidUnitValue('px')).toBe(true)
  })

  it('isValidUnitValue returns false if invalid', () => {
    expect(isValidUnitValue('')).toBe(false)
    expect(isValidUnitValue(undefined)).toBe(false)
    expect(isValidUnitValue(null)).toBe(false)
    expect(isValidUnitValue(false)).toBe(false)
    expect(isValidUnitValue(1)).toBe(false)
  })

  it('getRadiuses', () => {
    expect(getRadiuses()('circle')).toBe(testTheme.radius.circle)
    expect(getRadiuses()('none')).toBe(testTheme.radius.none)
    expect(getRadiuses()('round')).toBe(testTheme.radius.round)
    expect(getRadiuses()('rounded')).toBe(testTheme.radius.rounded)
    expect(getRadiuses()('10px')).toBe('10px')
    expect(getRadiuses()('')).toBe(0)
  })

  it('allPositions', () => {
    expect(allPositions(testTheme.unit)('100%', 'margin')).toEqual({
      margin: '100%',
    })
    expect(allPositions(testTheme.unit)('default', 'margin')).toEqual({
      margin: '24px',
    })
    expect(allPositions(testTheme.unit)(10, 'margin')).toEqual({
      margin: '128px',
    })

    expect(allPositions(testTheme.unit)('100%', 'padding')).toEqual({
      padding: '100%',
    })
    expect(allPositions(testTheme.unit)('default', 'padding')).toEqual({
      padding: '24px',
    })
    expect(allPositions(testTheme.unit)(10, 'padding')).toEqual({
      padding: '128px',
    })
  })

  it('unitPositions margin', () => {
    const getStyle = unitPositions({ unit: testTheme.unit, style: 'margin' })
      .margin

    expect(getStyle('100%')).toEqual({ margin: '100%' })
    expect(getStyle('default')).toEqual({ margin: '24px' })
    expect(getStyle(10)).toEqual({ margin: '128px' })

    expect(getStyle(undefined)).toBe('')
    expect(getStyle(null)).toBe('')
    expect(getStyle(true)).toBe('')
    expect(getStyle(false)).toBe('')
  })
})
