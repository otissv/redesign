import { isFunction } from '@redesign/theme'

import {
  TabsInterface,
  TabsListInterface,
  TabButtonInterface,
  TabPanelInterface,
  TABS_ALIGN_TOP,
  TABS_ALIGN_BOTTOM,
  TABS_ALIGN_LEFT,
  TABS_ALIGN_RIGHT,
  TabStackedTypes,
} from './tabs.types'

function tabsAlignDirection(align: TabStackedTypes) {
  switch (align) {
    case TABS_ALIGN_LEFT:
      return 'row'
    case TABS_ALIGN_RIGHT:
      return 'row-reverse'
    case TABS_ALIGN_BOTTOM:
      return 'column-reverse'
    case TABS_ALIGN_TOP:
    default:
      return 'column'
  }
}

export function tabsTheme(props: TabsInterface) {
  const {
    align,
    theme: { Tabs },
  } = props

  return {
    position: 'relative',
    display: 'flex',
    flexDirection: tabsAlignDirection(align),
    overflow: 'hidden',

    ...(isFunction(Tabs) ? Tabs(props)?.default : Tabs?.default),
  }
}

export function tabsButtonTheme(props: TabButtonInterface) {
  const {
    item,
    theme: { TabsListButton },
  } = props

  return item
    ? {
        width: 'auto',
        flex: 'none',
        ...(isFunction(TabsListButton)
          ? TabsListButton(props)?.item
          : TabsListButton?.item),
      }
    : {
        position: 'relative',
      }
}

export function tabsListTheme(props: TabsListInterface) {
  const {
    theme: { TabsList },
  } = props

  return {
    overflow: 'auto hidden',
    whiteSpace: 'nowrap',

    ...(isFunction(TabsList) ? TabsList(props)?.list : TabsList?.list),
  }
}

export function tabsPanelTheme(props: TabPanelInterface) {
  const {
    theme: { color, Tabs },
  } = props

  return {
    position: 'relative',
    overflow: 'hidden auto',
    flex: 1,
    outlineColor: 'transparent',

    ':focus': {
      outline: `0.2em solid ${color.outline}`,
      outlineOffset: '-3px',
    },
    ...(isFunction(Tabs) ? Tabs(props)?.panel : Tabs?.panel),
  }
}
