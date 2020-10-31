"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Normalize = void 0;
var react_1 = require("react");
var emotion_1 = require("emotion");
var theme_1 = require("@redesign-system/theme");
function Normalize() {
    var normalize = react_1.useCallback(theme_1.normalizeTheme, []);
    react_1.useEffect(function () {
        emotion_1.injectGlobal(normalize());
    }, []);
    return null;
}
exports.Normalize = Normalize;
//# sourceMappingURL=Normalize.js.map