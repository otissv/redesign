import { AliasInterface } from './utility.types'

export function getAlias(style: string) {
  const alias: AliasInterface = {
    cl: 'color',
    bg: 'background',
    bga: 'backgroundAttachment',
    bgl: 'backgroundClip',
    bgc: 'backgroundColor',
    bgo: 'backgroundOpacity',
    bgp: 'backgroundPosition',
    bgr: 'backgroundRepeat',
    bgs: 'backgroundSize',
    bgi: 'backgroundImage',

    m: 'margin',
    mt: 'marginTop',
    mr: 'marginRight',
    mb: 'marginBottom',
    ml: 'marginLeft',
    mx: 'marginX',
    my: 'marginY',
    m0: 'margin0',
    m1: 'margin1',
    m2: 'margin2',
    m3: 'margin3',
    m4: 'margin4',
    m5: 'margin5',
    m6: 'margin6',
    m7: 'margin7',
    m8: 'margin8',
    m9: 'margin9',
    m10: 'margin10',

    p: 'padding',
    pt: 'paddingTop',
    pr: 'paddingRight',
    pb: 'paddingBottom',
    pl: 'paddingLeft',
    px: 'paddingX',
    py: 'paddingY',
    p0: 'padding0',
    p1: 'padding1',
    p2: 'padding2',
    p3: 'padding3',
    p4: 'padding4',
    p5: 'padding5',
    p6: 'padding6',
    p7: 'padding7',
    p8: 'padding8',
    p9: 'padding9',
    p10: 'padding10',

    br: 'border',
    brb: 'borderBottom',
    brl: 'borderLeft',
    brr: 'borderRight',
    brt: 'borderTop',
    brx: 'borderX',
    bry: 'borderY',
    brw: 'borderWidth',
    brc: 'borderColor',
    bds: 'borderStyle',

    r: 'radius',
    rb: 'borderBottomRadius',
    rl: 'borderLeftRadius',
    rr: 'borderRightRadius',
    rt: 'borderTopRadius',
    rx: 'borderXRadius',
    ry: 'borderYRadius',

    d: 'display',

    fl: 'flex',
    flg: 'flexGrow',
    fls: 'flexShrink',
    fld: 'flexDirection',
    flw: 'flexWrap',
    flb: 'fb',
    od: 'order',

    jc: 'justifyContent',
    ji: 'justifyItems',
    js: 'justifySelf',

    ac: 'alignContent',
    ai: 'alignItems',
    af: 'alignSelf',

    e: 'elevate',

    cd: 'centered',

    mh: 'maxHeight',
    mw: 'maxWidth',

    ta: 'textAlign',
    wb: 'wordBreak',
    tc: 'truncate',
    lt: 'listStyle',
    lp: 'listPosition',
    td: 'textDecoration',
    tt: 'textTransform',
    va: 'verticalAlign',
    ws: 'whiteSpace',

    mq: 'mediaQuires',

    of: 'overflow',
    ox: 'overflowX',
    oy: 'overflowY',
    os: 'overFlowScrolling',
    ow: 'overflowWrap',

    ps: 'position',

    fs: 'fontSize',
    lh: 'lineHeight',
    ls: 'letterSpacing',
    fw: 'fontWeight',
    ff: 'fontFamily',
    fv: 'fontVariantNumeric',

    ft: 'float',
    cf: 'clearFix',

    ot: 'objectFit',
    op: 'objectPosition',

    bs: 'boxSizing',

    vs: 'visibility',

    cr: 'cursor',
    ap: 'appearance',
    pe: 'pointerEvents',
    rs: 'resize',
    us: 'userSelect',

    tf: 'transform',
  }

  return alias[style] || style
}
