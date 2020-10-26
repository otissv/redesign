import { unitTheme } from './unit.theme';
import { theme as testTheme } from '../../../testing/fixtures';
describe('unitTheme', function() {
    it('create unit theme', function() {
        var theme = {
            unit: testTheme.unit
        };
        var actual = unitTheme(theme);
        expect(actual).toEqual(testTheme.unit);
    });
    it('can overwrite unit theme', function() {
        var theme = {
            unit: {
                0: 'test'
            }
        };
        var actual = unitTheme(theme);
        expect(actual[0]).toBe('test');
    });
    it('can extend unit theme', function() {
        var theme = {
            unit: {
                test: 'test'
            }
        };
        var actual = unitTheme(theme);
        expect(actual.test).toBe('test');
    });
});
