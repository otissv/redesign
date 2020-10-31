"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transitionTheme = exports.easeTransition = void 0;
var tslib_1 = require("tslib");
var deepmerge_1 = tslib_1.__importDefault(require("deepmerge"));
var maybe_1 = require("../utils/maybe");
var transition_types_1 = require("./transition.types");
function easeTransition(options) {
    var _a = options || {}, _b = _a.delay, delay = _b === void 0 ? '' : _b, _c = _a.property, property = _c === void 0 ? 'all' : _c, _d = _a.speed, speed = _d === void 0 ? transition_types_1.MEDIUM : _d, _e = _a.ease, ease = _e === void 0 ? 'ease' : _e;
    return property + " " + speed + " " + ease + " " + delay;
}
exports.easeTransition = easeTransition;
function transitionTheme(theme) {
    var transition = maybe_1.maybe({})(theme === null || theme === void 0 ? void 0 : theme.transition);
    var defaults = {
        0: transition_types_1.XSLOW,
        1: transition_types_1.SLOW,
        2: transition_types_1.MEDIUM,
        3: transition_types_1.FAST,
        // ease
        easeFast: function (props) {
            return easeTransition(tslib_1.__assign(tslib_1.__assign({}, props), { ease: transition_types_1.EASE, speed: transition_types_1.FAST }));
        },
        easeMedium: function (props) {
            return easeTransition(tslib_1.__assign(tslib_1.__assign({}, props), { ease: transition_types_1.EASE, speed: transition_types_1.MEDIUM }));
        },
        easeSlow: function (props) {
            return easeTransition(tslib_1.__assign(tslib_1.__assign({}, props), { ease: transition_types_1.EASE, speed: transition_types_1.SLOW }));
        },
        easeXslow: function (props) {
            return easeTransition(tslib_1.__assign(tslib_1.__assign({}, props), { ease: transition_types_1.EASE, speed: transition_types_1.XSLOW }));
        },
        // easIn
        easeInFast: function (props) {
            return easeTransition(tslib_1.__assign(tslib_1.__assign({}, props), { ease: transition_types_1.EASE_IN, speed: transition_types_1.FAST }));
        },
        easeInMedium: function (props) {
            return easeTransition(tslib_1.__assign(tslib_1.__assign({}, props), { ease: transition_types_1.EASE_IN, speed: transition_types_1.MEDIUM }));
        },
        easeInSlow: function (props) {
            return easeTransition(tslib_1.__assign(tslib_1.__assign({}, props), { ease: transition_types_1.EASE_IN, speed: transition_types_1.SLOW }));
        },
        easeInXslow: function (props) {
            return easeTransition(tslib_1.__assign(tslib_1.__assign({}, props), { ease: transition_types_1.EASE_IN, speed: transition_types_1.XSLOW }));
        },
        // easeInOut
        easeInOutFast: function (props) {
            return easeTransition(tslib_1.__assign(tslib_1.__assign({}, props), { ease: transition_types_1.EASE_IN_OUT, speed: transition_types_1.FAST }));
        },
        easeInOutMedium: function (props) {
            return easeTransition(tslib_1.__assign(tslib_1.__assign({}, props), { ease: transition_types_1.EASE_IN_OUT, speed: transition_types_1.MEDIUM }));
        },
        easeInOutSlow: function (props) {
            return easeTransition(tslib_1.__assign(tslib_1.__assign({}, props), { ease: transition_types_1.EASE_IN_OUT, speed: transition_types_1.SLOW }));
        },
        easeInOutXslow: function (props) {
            return easeTransition(tslib_1.__assign(tslib_1.__assign({}, props), { ease: transition_types_1.EASE_IN_OUT, speed: transition_types_1.XSLOW }));
        },
        // easeOut
        easeOutFast: function (props) {
            return easeTransition(tslib_1.__assign(tslib_1.__assign({}, props), { ease: transition_types_1.EASE_OUT, speed: transition_types_1.FAST }));
        },
        easeOutMedium: function (props) {
            return easeTransition(tslib_1.__assign(tslib_1.__assign({}, props), { ease: transition_types_1.EASE_OUT, speed: transition_types_1.MEDIUM }));
        },
        easeOutSlow: function (props) {
            return easeTransition(tslib_1.__assign(tslib_1.__assign({}, props), { ease: transition_types_1.EASE_OUT, speed: transition_types_1.SLOW }));
        },
        easeOutXslow: function (props) {
            return easeTransition(tslib_1.__assign(tslib_1.__assign({}, props), { ease: transition_types_1.EASE_OUT, speed: transition_types_1.XSLOW }));
        },
    };
    return deepmerge_1.default(defaults, transition);
}
exports.transitionTheme = transitionTheme;
//# sourceMappingURL=transition.theme.js.map