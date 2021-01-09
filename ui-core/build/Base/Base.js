"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = exports.BaseComponent = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var emotion_1 = require("emotion");
var popmotion_1 = require("popmotion");
var createStyleString_1 = require("../helpers/createStyleString");
var buildCssUtilities_1 = require("../helpers/buildCssUtilities");
var ignoreAttributes_1 = require("./ignoreAttributes");
var theme_1 = require("@redesign-system/theme");
function CreateComponent(_a) {
    var _b = _a.tag, tag = _b === void 0 ? 'div' : _b, children = _a.children, props = tslib_1.__rest(_a, ["tag", "children"]);
    return react_1.createElement(tag, props, Array.isArray(children) ? tslib_1.__spreadArrays(children) : children);
}
function useAnimation(_a) {
    var _b = _a.animate, active = _b === void 0 ? '' : _b, animations = _a.animations;
    var currentAnimation = react_1.default.useRef();
    function reducer(state, action) {
        var _a;
        return tslib_1.__assign(tslib_1.__assign({}, state), (_a = {}, _a[action.type] = action.value, _a));
    }
    var _c = react_1.default.useReducer(reducer, {}), styles = _c[0], dispatch = _c[1];
    react_1.default.useEffect(function () {
        if (!animations || currentAnimation.current === active) {
            return;
        }
        var _loop_1 = function (key) {
            var prop = animations[active][key];
            popmotion_1.animate(tslib_1.__assign(tslib_1.__assign({}, prop), { onUpdate: function (value) {
                    dispatch({
                        type: key,
                        value: value,
                    });
                } }));
        };
        for (var _i = 0, _a = Object.keys(animations[active] || {}); _i < _a.length; _i++) {
            var key = _a[_i];
            _loop_1(key);
        }
        currentAnimation.current = active;
    }, [active, animations]);
    return styles;
}
exports.BaseComponent = function Base(props) {
    var _a = props.animate, active = _a === void 0 ? '' : _a, animations = props.animations, tag = props.as, children = props.children, childrenCss = props.childrenCss, childrenProps = props.childrenProps, _b = props.className, className = _b === void 0 ? '' : _b, _c = props.css, css = _c === void 0 ? '' : _c, theme = props.theme, _d = props.__ignore, __ignore = _d === void 0 ? [] : _d, propsRest = tslib_1.__rest(props
    // merge styles into string
    , ["animate", "animations", "as", "children", "childrenCss", "childrenProps", "className", "css", "theme", "__ignore"]);
    // merge styles into string
    var _styles = tslib_1.__spreadArrays((css ? [createStyleString_1.createStyleString(css, props)] : []), [
        createStyleString_1.createStyleString(buildCssUtilities_1.buildCssUtilities(props)),
    ]).filter(function (s) { return s.trim() !== ''; })
        .join(';');
    var classNameStyles = emotion_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["", ""], ["", ""])), _styles);
    var classNames = "Base " + classNameStyles + " " + className;
    // attributes
    var ignore = tslib_1.__spreadArrays(ignoreAttributes_1.ignoreAttributes, (Array.isArray(__ignore) ? __ignore : [__ignore]));
    var animationStyles = useAnimation({
        animate: active,
        animations: animations,
    });
    var attributes = {};
    for (var key in propsRest) {
        if (key === 'style') {
            attributes.style = tslib_1.__assign(tslib_1.__assign({}, animationStyles), propsRest.style);
        }
        else if (!ignore.includes(key)) {
            attributes[key] = propsRest[key];
        }
    }
    // clone children props and css
    var clonedChildren = childrenProps || childrenCss
        ? react_1.default.Children.map(children, function (child) {
            var _a, _b, _c;
            if (!child)
                return null;
            var childProps = theme_1.isFunction(childrenProps)
                ? childrenProps &&
                    childrenProps(props)
                : childrenProps;
            return child.props
                ? react_1.cloneElement(child, tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, child.props), (childProps || {})), { style: tslib_1.__assign(tslib_1.__assign({}, (_a = child.props) === null || _a === void 0 ? void 0 : _a.style), ((childProps === null || childProps === void 0 ? void 0 : childProps.style) || {})), css: [
                        child.props.css || '',
                        (childProps === null || childProps === void 0 ? void 0 : childProps.css) || '',
                        childrenCss || '',
                    ], className: (((_b = child.props) === null || _b === void 0 ? void 0 : _b.className) ||
                        '') + " " + (((_c = childrenProps) === null || _c === void 0 ? void 0 : _c.className) || '') }), child.props.children)
                : child;
        })
        : children;
    return (react_1.default.createElement(CreateComponent, tslib_1.__assign({ className: classNames, tag: tag, children: clonedChildren }, attributes)));
};
exports.Base = react_1.default.forwardRef(function (props, ref) {
    var theme = props.theme, propsRest = tslib_1.__rest(props, ["theme"]);
    return react_1.default.createElement(exports.BaseComponent, tslib_1.__assign({ theme: theme, ref: ref }, propsRest));
});
exports.BaseComponent.displayName = 'Base';
var templateObject_1;
//# sourceMappingURL=Base.js.map