"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalTheme = void 0;
var tslib_1 = require("tslib");
var deepmerge_1 = tslib_1.__importDefault(require("deepmerge"));
var maybe_1 = require("../utils/maybe");
function globalTheme(theme) {
    var maybeTheme = maybe_1.maybe({});
    var global = maybeTheme(theme === null || theme === void 0 ? void 0 : theme.global);
    var color = maybeTheme(theme === null || theme === void 0 ? void 0 : theme.color);
    var font = maybeTheme(theme === null || theme === void 0 ? void 0 : theme.font);
    var border = maybeTheme(theme === null || theme === void 0 ? void 0 : theme.border);
    var unit = maybeTheme(theme === null || theme === void 0 ? void 0 : theme.unit);
    var scrollbar = maybe_1.maybe({
        corner: { backgroundColor: '' },
        thumb: {
            outline: 'transparent',
            transition: '',
            hover: {
                backgroundColor: '',
            },
        },
    })(theme === null || theme === void 0 ? void 0 : theme.scrollbar);
    var defaults = {
        html: {
            lineHeight: font.lineHeight.default,
            textRendering: 'optimizeLegibility',
            msTextSizeSdjust: '100%',
            webkitTextSizeAdjust: '100%',
            boxSizing: 'border-box',
            height: '100%',
            background: color.background,
            color: color.text,
            letterSpacing: font.letterSpacing + " !important",
        },
        body: {
            height: '100%',
            background: color.background,
            color: color.text,
            letterSpacing: font.letterSpacing + " !important",
            margin: 0,
            padding: 0,
            fontWeight: font.weight.default,
            wordWrap: 'break-word',
            fontKerning: 'normal',
            mozFontFeatureSettings: "'kern', 'liga', 'clig', 'calt'",
            msFontFeatureSettings: "'kern', 'liga', 'clig', 'calt'",
            webkitFontFeatureSettings: "'kern', 'liga', 'clig', 'calt'",
            fontFeatureSettings: "'kern', 'liga', 'clig', 'calt'",
            fontFamily: font.family.sans,
            fontSize: font.size.default,
            fontSmooth: font.smooth,
        },
        a: {
            fontFamily: font.family.sans,
            fontSize: font.size.default,
            touchAction: 'manipulation',
            fontSmooth: font.smooth,
            backgroundColor: 'transparent',
            webkitTextDecorationSkip: 'objects',
            textDecoration: 'none',
            color: color.linkText,
            'a:active': {
                outlineWidth: 0,
            },
            'a:hover': {
                outlineWidth: 0,
            },
        },
        abbr: {
            borderBottom: '1px dotted hsla(0, 0%, 0%, 0.5)',
            cursor: 'help',
        },
        'abbr[title]': {
            textDecoration: 'underline dotted',
            borderBottom: "1px dotted hsla(0, 0%, 0%, 0.5)",
            cursor: 'help',
        },
        address: {
            // margin: 0, // margin: `0  0 ${unit.default} 0`,
            margin: 0,
            padding: 0,
        },
        article: {
            display: 'block',
        },
        area: {
            touchAction: 'manipulation',
        },
        aside: {
            display: 'block',
        },
        audio: {
            display: 'inline-block',
        },
        b: {
            fontWeight: 'bold',
        },
        blockquote: {
            margin: 0,
            // marginTop: 0,
            // marginRight: '1.75rem',
            // marginBottom: '1.75rem',
            // marginLeft: '-1.75rem',
            paddingBottom: 0,
            paddingLeft: '1.42188rem',
            paddingRight: 0,
            paddingTop: 0,
            fontSize: font.size[5],
            lineHeight: font.lineHeight.default,
            color: color.grey_500,
            fontStyle: 'italic',
            borderLeft: "0.32813rem solid " + color.text,
        },
        button: {
            font: 'inherit',
            fontSmooth: font.smooth,
            margin: 0,
            overflow: 'visible',
            touchAction: 'manipulation',
        },
        canvas: {
            display: 'inline-block',
        },
        code: {
            fontSize: font.small,
            fontFamily: font.family.code,
            lineHeight: 1.3,
            backgroundColor: color.grey_200,
            color: color.accent,
            borderRadius: '3px',
            padding: unit[1] + " " + unit[2],
            '&:before': {
                letterSpacing: -unit[1],
                content: '""',
            },
            '&:after': {
                letterSpacing: -unit[1],
                content: '""',
            },
        },
        dd: {
            margin: 0,
            padding: 0,
        },
        details: {
            display: 'block',
        },
        dfn: {
            fontStyle: 'italic',
        },
        dl: {
            // margin: 0, // margin: `0  0 ${unit.default} 0`,
            margin: 0,
            padding: 0,
        },
        dt: {
            fontWeight: 'bold',
        },
        figcaption: {
            display: 'block',
            // margin: 0, // margin: `0  0 ${unit.default} 0`,
            margin: 0,
            padding: '0',
        },
        fieldset: {
            border: 'none',
            margin: 0,
            padding: 0,
        },
        figure: {
            display: 'block',
            // margin: '1em 40px',
            margin: 0,
        },
        footer: {
            display: 'block',
        },
        form: {
            // margin: 0, // margin: `0  0 ${unit.default} 0`,
            margin: 0,
            padding: 0,
        },
        h1: {
            // margin: 0, // margin: `0  0 ${unit.default} 0`,
            margin: 0,
            padding: 0,
            fontWeight: 'bold',
            lineHeight: font.lineHeight[1],
            fontFamily: font.family.sans,
            fontSize: font.size[10],
            fontSmooth: font.smooth,
        },
        h2: {
            // margin: 0, // margin: `0  0 ${unit.default} 0`,
            margin: 0,
            padding: 0,
            fontWeight: 'bold',
            lineHeight: font.lineHeight[1],
            fontFamily: font.family.sans,
            fontSize: font.size[7],
            fontSmooth: font.smooth,
        },
        h3: {
            margin: 0,
            padding: 0,
            fontWeight: 'bold',
            lineHeight: font.lineHeight[1],
            fontFamily: font.family.sans,
            fontSize: font.size[6],
            fontSmooth: font.smooth,
        },
        h4: {
            margin: 0,
            padding: 0,
            fontWeight: 'bold',
            lineHeight: font.lineHeight[1],
            fontFamily: font.family.sans,
            fontSmooth: font.smooth,
            fontSize: font.size[4],
        },
        h5: {
            margin: 0,
            padding: 0,
            fontWeight: 'bold',
            lineHeight: font.lineHeight[1],
            fontFamily: font.family.sans,
            fontSize: font.size[4],
            fontSmooth: font.smooth,
        },
        h6: {
            margin: 0,
            padding: 0,
            fontWeight: 'bold',
            lineHeight: font.lineHeight[1],
            fontFamily: font.family.sans,
            fontSize: font.size[3],
            fontSmooth: font.smooth,
        },
        header: {
            display: 'block',
        },
        hr: {
            boxSizing: 'content-box',
            height: 0,
            overflow: 'visible',
            border: border.thin,
            margin: "calc(" + unit.default + " - 1px) 0",
            textShadow: 'none',
        },
        hgroup: {
            margin: 0,
            padding: 0,
        },
        iframe: {
            margin: 0,
            padding: 0,
        },
        img: {
            borderStyle: 'none',
            padding: 0,
            margin: 0,
            maxWidth: '100%',
        },
        input: {
            font: 'inherit',
            margin: 0,
            overflow: 'visible',
            touchAction: 'manipulation',
        },
        kbd: {
            fontSize: font.small,
            fontFamily: font.family.code,
            lineHeight: 1.3,
        },
        label: {
            touchAction: 'manipulation',
        },
        legend: {
            color: 'inherit',
            display: 'table',
            maxWidth: '100%',
            padding: 0,
            whiteSpace: 'normal',
        },
        li: {
            paddingLeft: 0,
            ol: {
                // marginTop: `calc(${unit.default} / 2)`,
                // marginLeft: unit.default,
                // marginBottom: `calc(${unit.default} / 2)`,
                margin: 0,
            },
            ul: {
                // marginTop: `calc(${unit.default} / 2)`,
                // marginLeft: unit.default,
                // marginBottom: `calc(${unit.default} / 2)`,
                margin: 0,
            },
            '> p': {
                // marginBottom: 'calc(${unit.default} / 2)',
                margin: 0,
            },
        },
        main: {
            display: 'block',
        },
        mark: {
            backgroundColor: '#ff0',
            color: '#000',
        },
        menu: {
            display: 'block',
        },
        nav: {
            display: 'block',
        },
        noscript: {
            margin: 0,
            padding: 0,
        },
        ol: {
            margin: 0,
            padding: 0,
            listStylePosition: 'outside',
            listStyleImage: 'none',
        },
        optgroup: {
            font: 'inherit',
            fontWeight: 700,
            margin: 0,
        },
        p: {
            fontSize: font.size.default,
            fontFamily: font.family.sans,
            fontSmooth: font.smooth,
            margin: 0,
            padding: 0,
        },
        pre: {
            height: '100%',
            margin: 0,
            padding: unit.default,
            background: color.background,
            color: color.text,
            letterSpacing: font.letterSpacing + " !important",
            fontSize: font.small,
            fontFamily: font.family.code,
            // lineHeight: font.lineHeight[2],
            // fontSize: 0.85rem;
            // lineHeight: 1.3,
            // background: 'hsla(0, 0%, 0%, 0.04)',
            overflow: 'auto',
            wordWrap: 'normal',
            code: {
                background: 'none',
                lineHeight: font.lineHeight.default,
                color: color.text,
                '&:before': {
                    content: '""',
                },
                '&:after': {
                    content: '""',
                },
            },
            tt: {
                '&:before': {
                    content: '""',
                },
                '&:after': {
                    content: '""',
                },
            },
        },
        q: {
            fontStyle: 'italic',
            '&:before': {
                content: 'open-quote',
            },
            '&:after': {
                content: 'open-quote',
            },
        },
        progress: {
            display: 'inline-block',
        },
        samp: {
            fontSize: font.small,
            fontFamily: font.family.code,
            lineHeight: 1.3,
        },
        section: {
            display: 'block',
        },
        select: {
            font: 'inherit',
            margin: 0,
            textTransform: 'none',
            touchAction: 'manipulation',
        },
        small: {
            fontSize: font.size[2],
        },
        strong: {
            fontWeight: 'bold',
        },
        sub: {
            fontSize: '75%',
            lineHeight: 0,
            position: 'relative',
            verticalAlign: 'baseline',
            bottom: '-0.25em',
        },
        sup: {
            fontSize: '75%',
            lineHeight: 0,
            position: 'relative',
            verticalAlign: 'baseline',
            top: '-0.5em',
        },
        summary: {
            display: 'block',
            touchAction: 'manipulation',
        },
        'svg:not(:root)': {
            overflow: 'hidden',
        },
        table: {
            padding: 0,
            fontSize: font.size.default,
            lineHeight: font.lineHeight[2],
            borderCollapse: 'collapse',
            width: '100%',
        },
        td: {
            textAlign: 'left',
            borderBottom: '1px solid hsla(0, 0%, 100%, 0.12)',
            fontFeatureSettings: 'tnum',
            mozFontFeatureSettings: 'tnum',
            msFontFeatureSettings: 'tnum',
            webkitFontFeatureSettings: 'tnum',
            paddingLeft: unit[3],
            paddingRight: unit[3],
            paddingTop: unit[3],
            paddingBottom: unit[3],
            '&:first-child': {
                paddingLeft: 0,
            },
            '&:last-child': {
                paddingRight: 0,
            },
        },
        template: {
            display: 'none',
        },
        textarea: {
            font: 'inherit',
            margin: 0,
            overflow: 'auto',
            touchAction: 'manipulation',
        },
        th: {
            fontWeight: 'bold',
            textAlign: 'left',
            borderBottom: '1px solid hsla(0, 0%, 100%, 0.12)',
            fontFeatureSettings: 'tnum',
            mozFontFeatureSettings: 'tnum',
            msFontFeatureSettings: 'tnum',
            webkitFontFeatureSettings: 'tnum',
            paddingLeft: unit[3],
            paddingRight: unit[3],
            paddingTop: unit[3],
            paddingBottom: unit[3],
            '&:first-child': {
                paddingLeft: 0,
            },
            '&:last-child': {
                paddingRight: 0,
            },
        },
        thead: {
            textAlign: 'left',
        },
        tt: {
            backgroundColor: color.grey_200,
            color: color.accent,
            borderRadius: '3px',
            fontFamily: font.family.code,
            padding: unit[1] + " " + unit[2],
            '&:before': {
                letterSpacing: -unit[1],
                content: '""',
            },
            '&:after': {
                letterSpacing: -unit[1],
                content: '""',
            },
        },
        ul: {
            margin: 0,
            padding: 0,
            listStylePosition: 'outside',
            listStyleImage: 'none',
        },
        '[hidden]': {
            display: 'none',
        },
        '[type="button"]': {
            webkitAppearance: 'button',
            '&::-moz-focus-inner': {
                borderStyle: 'none',
                padding: 0,
            },
            ':-moz-focusring': {
                outline: "1px solid " + color.outline,
            },
        },
        '[type="checkbox"]': {
            boxSizing: 'border-box',
            padding: 0,
        },
        '[type="number"]::-webkitOuterSpinButton': {
            height: 'auto',
        },
        '[type="radio"]': {
            boxSizing: 'border-box',
            padding: 0,
        },
        '[type="reset"]': {
            webkitAppearance: 'button',
            '&::-moz-focus-inner': {
                borderStyle: 'none',
                padding: 0,
            },
            ':-moz-focusring': {
                outline: '1px solid ButtonText',
            },
        },
        '[type="search"]': {
            webkitAppearance: 'textfield',
            outlineOffset: '-2px',
            '&::-webkitSearch-cancel-button': {
                webkitAppearance: 'none',
            },
            '&::-webkitSearch-decoration': {
                webkitAppearance: 'none',
            },
        },
        '[type="submit"]': {
            webkitAppearance: 'button',
            '&::-moz-focus-inner': {
                borderStyle: 'none',
                padding: 0,
            },
            ':-moz-focusring': {
                outline: '1px solid ButtonText',
            },
        },
        '*': {
            boxSizing: 'inherit',
        },
        '*:before': {
            boxSizing: 'inherit',
        },
        '*:after': {
            boxSizing: 'inherit',
        },
        '::selection': {
            background: color.active,
            color: '#ffffff',
        },
        '::WebkitInputPlaceholder': {
            color: 'inherit',
            opacity: 0.54,
        },
        '::WebkitFileUploadButton': {
            webkitAppearance: 'button',
            font: 'inherit',
        },
        '*::WebkitScrollbar': {
            width: scrollbar.width,
            height: scrollbar.height,
        },
        '*::WebkitScrollbar-corner': {
            backgroundColor: scrollbar.corner.backgroundColor,
        },
        '*::WebkitScrollbar-thumb': {
            backgroundColor: scrollbar.thumb.backgroundColor,
            outline: scrollbar.thumb.outline,
            transition: scrollbar.thumb.transition,
        },
        '*::Webkit-scrollbar-thumb:hover': {
            backgroundColor: scrollbar.thumb.hover.backgroundColor,
        },
    };
    return deepmerge_1.default(defaults, global);
}
exports.globalTheme = globalTheme;
//# sourceMappingURL=global.theme.js.map