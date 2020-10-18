import { globalTheme } from './global.theme';
import { theme as themeDefaults } from '../../../testing/fixtures';

import { PartialGlobalInterface } from './global.types';
import { theme as testTheme } from '../../../testing/fixtures';
import { PartialThemeInterface } from '../theme';

interface ExtendGlobalInterface extends PartialGlobalInterface {
  test: string;
}

interface ExtendThemeInterface {
  global: ExtendGlobalInterface;
}

describe('globalTheme', () => {
  it('create global theme', () => {
    const theme: PartialThemeInterface = {
      global: themeDefaults.global,
      color: testTheme.color,
      border: testTheme.border,
      unit: testTheme.unit,
    };
    const actual = globalTheme(theme);
    expect(actual).toEqual(themeDefaults.global);
  });

  it('can overwrite global theme', () => {
    const theme: PartialThemeInterface = {
      global: {
        none: 'test',
      },
    };
    const actual = globalTheme(theme);
    expect(actual.none).toBe('test');
  });

  it('can extend global theme', () => {
    const theme = {
      global: {
        test: 'test',
      },
    };
    const actual = globalTheme<ExtendThemeInterface, ExtendGlobalInterface>(
      theme
    );
    expect(actual.test).toBe('test');
  });
});
