"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoize = void 0;
function memoize(fn) {
    var cache = {};
    return function (arg) {
        if (cache[arg] === undefined)
            cache[arg] = fn(arg);
        return cache[arg];
    };
}
exports.memoize = memoize;
//# sourceMappingURL=memoize.js.map