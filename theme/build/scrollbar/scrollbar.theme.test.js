import { scrollbarTheme } from './scrollbar.theme';
import { theme as testTheme } from '../../../testing/fixtures';
describe('scrollbarTheme', function() {
    it('create scrollbar theme', function() {
        var theme = {
            scrollbar: testTheme.scrollbar
        };
        var actual = scrollbarTheme(theme);
        expect(actual).toEqual(testTheme.scrollbar);
    });
    it('can overwrite scrollbar theme', function() {
        var theme = {
            scrollbar: {
                width: 'test'
            }
        };
        var actual = scrollbarTheme(theme);
        expect(actual.width).toBe('test');
    });
    it('can extend scrollbar theme', function() {
        var theme = {
            scrollbar: {
                test: 'test'
            }
        };
        var actual = scrollbarTheme(theme);
        expect(actual.test).toBe('test');
    });
});
