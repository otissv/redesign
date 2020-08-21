import {
  TabsInterface,
  TabsListInterface,
  TabListButtonInterface,
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

export function tabsTheme({ align }: TabsInterface) {
  return {
    display: 'flex',
    flexDirection: tabsAlignDirection(align),
    overflow: 'hidden',
  }
}

export function tabsListButtonTheme({ item }: TabListButtonInterface) {
  return item
    ? {
        width: 'auto',
        flex: 'none',
      }
    : {}
}

export function tabsListTheme({}: TabsListInterface) {
  return {
    overflow: 'auto hidden',
    whiteSpace: 'nowrap',
  }
}

export function tabsPanelTheme({}: TabPanelInterface) {
  return {
    overflow: 'hidden auto',
    flex: 1,
  }
}
