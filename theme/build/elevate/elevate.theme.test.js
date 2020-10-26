import { elevateTheme } from './elevate.theme';
import { theme as testTheme } from '../../../testing/fixtures';
describe('elevateTheme', function() {
    it('create elevate theme', function() {
        var theme = {
            elevate: testTheme.elevate,
            unit: testTheme.unit
        };
        var actual = elevateTheme(theme);
        expect(actual).toEqual(testTheme.elevate);
    });
    it('can overwrite elevate theme', function() {
        var theme = {
            elevate: {
                5: 'test'
            }
        };
        var actual = elevateTheme(theme);
        expect(actual[5]).toBe('test');
    });
    it('can extend elevate theme', function() {
        var theme = {
            elevate: {
                test: 'test6'
            }
        };
        var actual = elevateTheme(theme);
        expect(actual.test).toBe('test6');
    });
});
