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
    var xslow = transition[0] || transition_types_1.XSLOW;
    var slow = transition[1] || transition_types_1.SLOW;
    var medium = transition[2] || transition_types_1.MEDIUM;
    var fast = transition[3] || transition_types_1.FAST;
    var defaults = {
        0: xslow,
        1: slow,
        2: medium,
        3: fast,
        // ease
        easeFast: function (props) {
            return easeTransition(tslib_1.__assign(tslib_1.__assign({}, props), { ease: transition_types_1.EASE, speed: fast }));
        },
        easeMedium: function (props) {
            return easeTransition(tslib_1.__assign(tslib_1.__assign({}, props), { ease: transition_types_1.EASE, speed: medium }));
        },
        easeSlow: function (props) {
            return easeTransition(tslib_1.__assign(tslib_1.__assign({}, props), { ease: transition_types_1.EASE, speed: slow }));
        },
        easeXslow: function (props) {
            return easeTransition(tslib_1.__assign(tslib_1.__assign({}, props), { ease: transition_types_1.EASE, speed: xslow }));
        },
        // easIn
        easeInFast: function (props) {
            return easeTransition(tslib_1.__assign(tslib_1.__assign({}, props), { ease: transition_types_1.EASE_IN, speed: fast }));
        },
        easeInMedium: function (props) {
            return easeTransition(tslib_1.__assign(tslib_1.__assign({}, props), { ease: transition_types_1.EASE_IN, speed: medium }));
        },
        easeInSlow: function (props) {
            return easeTransition(tslib_1.__assign(tslib_1.__assign({}, props), { ease: transition_types_1.EASE_IN, speed: slow }));
        },
        easeInXslow: function (props) {
            return easeTransition(tslib_1.__assign(tslib_1.__assign({}, props), { ease: transition_types_1.EASE_IN, speed: xslow }));
        },
        // easeInOut
        easeInOutFast: function (props) {
            return easeTransition(tslib_1.__assign(tslib_1.__assign({}, props), { ease: transition_types_1.EASE_IN_OUT, speed: fast }));
        },
        easeInOutMedium: function (props) {
            return easeTransition(tslib_1.__assign(tslib_1.__assign({}, props), { ease: transition_types_1.EASE_IN_OUT, speed: medium }));
        },
        easeInOutSlow: function (props) {
            return easeTransition(tslib_1.__assign(tslib_1.__assign({}, props), { ease: transition_types_1.EASE_IN_OUT, speed: slow }));
        },
        easeInOutXslow: function (props) {
            return easeTransition(tslib_1.__assign(tslib_1.__assign({}, props), { ease: transition_types_1.EASE_IN_OUT, speed: xslow }));
        },
        // easeOut
        easeOutFast: function (props) {
            return easeTransition(tslib_1.__assign(tslib_1.__assign({}, props), { ease: transition_types_1.EASE_OUT, speed: fast }));
        },
        easeOutMedium: function (props) {
            return easeTransition(tslib_1.__assign(tslib_1.__assign({}, props), { ease: transition_types_1.EASE_OUT, speed: medium }));
        },
        easeOutSlow: function (props) {
            return easeTransition(tslib_1.__assign(tslib_1.__assign({}, props), { ease: transition_types_1.EASE_OUT, speed: slow }));
        },
        easeOutXslow: function (props) {
            return easeTransition(tslib_1.__assign(tslib_1.__assign({}, props), { ease: transition_types_1.EASE_OUT, speed: xslow }));
        },
    };
    return deepmerge_1.default(defaults, transition);
}
exports.transitionTheme = transitionTheme;
//# sourceMappingURL=transition.theme.js.map