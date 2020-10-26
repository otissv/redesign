import { colorTheme } from './color.theme';
import { theme as testTheme } from '../../../testing/fixtures';
describe('colorTheme', function() {
    it('create color theme', function() {
        var theme = {
            color: {
            }
        };
        var actual = colorTheme(theme);
        expect(actual).toEqual(testTheme.color);
    });
    it('create color theme without theme', function() {
        var actual = colorTheme();
        expect(actual).toEqual(testTheme.color);
    });
    it('can overwrite color theme', function() {
        var theme = {
            color: {
                accent: 'orange'
            }
        };
        var actual = colorTheme(theme);
        expect(actual.accent).toBe('#E67635');
    });
    it('can extend color theme', function() {
        var theme = {
            color: {
                test: 'test'
            }
        };
        var actual = colorTheme(theme);
        expect(actual.test).toBe('test');
    });
});
