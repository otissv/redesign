import { globalTheme } from './global.theme';
import { theme as themeDefaults } from '../../../testing/fixtures';
import { theme as testTheme } from '../../../testing/fixtures';
describe('globalTheme', function() {
    it('create global theme', function() {
        var theme = {
            global: themeDefaults.global,
            color: testTheme.color,
            border: testTheme.border,
            unit: testTheme.unit
        };
        var actual = globalTheme(theme);
        expect(actual).toEqual(themeDefaults.global);
    });
    it('can overwrite global theme', function() {
        var theme = {
            global: {
                none: 'test'
            }
        };
        var actual = globalTheme(theme);
        expect(actual.none).toBe('test');
    });
    it('can extend global theme', function() {
        var theme = {
            global: {
                test: 'test'
            }
        };
        var actual = globalTheme(theme);
        expect(actual.test).toBe('test');
    });
});
