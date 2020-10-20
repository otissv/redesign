import { AliasInterface } from '@redesign-system/theme'

export function getAlias(style: string) {
  const alias: AliasInterface = {
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

    b: 'border',
    bb: 'borderBottom',
    bl: 'borderLeft',
    br: 'borderRight',
    bt: 'borderTop',
    bx: 'borderX',
    by: 'borderY',

    r: 'radius',
    rb: 'borderBottomRadius',
    rl: 'borderLeftRadius',
    rr: 'borderRightRadius',
    rt: 'borderTopRadius',
    rx: 'borderXRadius',
    ry: 'borderYRadius',

    c: 'color',
    bg: 'background',

    d: 'display',

    f: 'flex',
    fg: 'flexGrow',
    od: 'order',
    fs: 'flexShrink',
    fd: 'flexDirection',
    fw: 'flexWrap',
    fb: 'fb',

    jc: 'justifyContent',
    ji: 'justifyItems',
    js: 'justifySelf',

    ac: 'alignContent',
    ai: 'alignItems',
    af: 'alignSelf',

    e: 'elevate',

    ct: 'centered',

    h: 'heightSize',
    w: 'widthSize',
    mh: 'maxHeight',
    mw: 'maxWidth',

    ta: 'textAlign',
    tr: 'truncate',

    mq: 'mediaQuires',

    of: 'overflow',
  }

  return alias[style] || style
}
