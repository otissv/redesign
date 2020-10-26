import { borderTheme } from './border.theme';
import { theme as testTheme } from '../../../testing/fixtures';
describe('borderTheme', function() {
    it('create border theme', function() {
        var theme = {
            color: testTheme.color,
            unit: testTheme.unit
        };
        var actual = borderTheme(theme);
        expect(actual).toEqual(testTheme.border);
    });
    it('can overwrite border theme', function() {
        var thickWidth = '100px';
        var theme = {
            color: testTheme.color,
            unit: testTheme.unit,
            border: {
                thickWidth: thickWidth
            }
        };
        var actual = borderTheme(theme).thickWidth;
        expect(actual).toBe(thickWidth);
    });
    it('can extend border theme', function() {
        var test = '99px dash #fff';
        var theme = {
            color: testTheme.color,
            unit: testTheme.unit,
            border: {
                test: test
            }
        };
        var actual = borderTheme(theme);
        expect(actual.test).toBe(test);
    });
});
