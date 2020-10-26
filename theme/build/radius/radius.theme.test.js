import { radiusTheme } from './radius.theme';
import { theme as testTheme } from '../../../testing/fixtures';
describe('radiusTheme', function() {
    it('create radius theme', function() {
        var theme = {
            radius: testTheme.radius
        };
        var actual = radiusTheme(theme);
        expect(actual).toEqual(testTheme.radius);
    });
    it('can overwrite radius theme', function() {
        var theme = {
            radius: {
                none: 'test'
            }
        };
        var actual = radiusTheme(theme);
        expect(actual.none).toBe('test');
    });
    it('can extend radius theme', function() {
        var theme = {
            radius: {
                test: 'test'
            }
        };
        var actual = radiusTheme(theme);
        expect(actual.test).toBe('test');
    });
});
