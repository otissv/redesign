import { ThemeComponentInterface } from '@redesign/theme'
import { ToolbarInterface } from '../../molecules/Toolbar'

export const REPLACE_ITEMS = 'REPLACE_ITEMS'
export const SET_CONTENT = 'SET_CONTENT'
export const SET_FOCUS = 'SET_FOCUS'
export const SET_ERRORS = 'SET_ERRORS'
export const SET_VIEW = 'SET_VIEW'
export const TOGGLE_EXPANDED = 'TOGGLE_EXPANDED'
export const TOGGLE_SELECTED = 'TOGGLE_SELECTED'
export const TOGGLE_SELECT_ALL = 'TOGGLE_SELECT_ALL'
export const UPDATE_ITEM = 'UPDATE_ITEM'

export const JSON_TABLE = 'JSON'
export const TABULAR_TABLE = 'TABULAR'

// Table Actions
export type TableActionsTypes =
  | typeof REPLACE_ITEMS
  | typeof SET_CONTENT
  | typeof SET_ERRORS
  | typeof SET_FOCUS
  | typeof SET_VIEW
  | typeof TOGGLE_EXPANDED
  | typeof TOGGLE_SELECTED
  | typeof TOGGLE_SELECT_ALL
  | typeof UPDATE_ITEM

export interface TableReplaceItemsAction {
  type: typeof REPLACE_ITEMS
  payload: any
}

export interface TableSetContentAction {
  type: typeof SET_CONTENT
  payload: any
}

export interface TableSetFocusAction {
  type: typeof SET_FOCUS
  payload: any
}

export interface TableSetViewAction {
  type: typeof SET_VIEW
  payload: any
}

export interface TableToggleExpandedAction {
  type: typeof TOGGLE_EXPANDED
  payload: any
}

export interface TableToggleSelectedAction {
  type: typeof TOGGLE_SELECTED
  payload: any
}

export interface TableToggleSelectAllAction {
  type: typeof TOGGLE_SELECT_ALL
}

export interface TableSetErrorAction {
  type: typeof SET_ERRORS
  payload: any
}

export interface TableUpdateItemAction {
  type: typeof UPDATE_ITEM
  payload: any
}

export type TableActionTypes =
  | TableReplaceItemsAction
  | TableSetContentAction
  | TableSetFocusAction
  | TableSetViewAction
  | TableToggleExpandedAction
  | TableToggleSelectedAction
  | TableToggleSelectAllAction
  | TableSetErrorAction
  | TableUpdateItemAction

// Table Events
export type TableTargetedEventType = React.SyntheticEvent<EventTarget>

export type TableCellEventType = (e: TableTargetedEventType) => void

export interface TableEventsInterface {
  onBlur: TableCellEventType
  onExpand: any | undefined
  onFocus: TableCellEventType
  onChange: TableCellEventType
  onSelect: any | undefined
  onToggleError?: (
    e: any,
    { id, showError }: { id: string; showError: boolean }
  ) => void
}

// Table Provider
export interface TableProviderInterface {
  children?: React.ReactNode
  expanded?: { [key: string]: boolean }
  focus?: string
  items: Array<{ [key: string]: any }>
  rowId?: string
  selected?: { [key: string]: boolean } | boolean
  view?: TableViewTypes
  onBlur?: (e: TableTargetedEventType, row: any) => void
  onExpand?: (e: any, id: string) => void
  onFocus?: (e: TableTargetedEventType, row: any) => void
  onChange?: (e: TableTargetedEventType, row: any) => void
  onSelect?: (e: any, id: string) => void
  onToggleError?: (
    e: any,
    { id, showError }: { id: string; showError: boolean }
  ) => void
}

// Table Context State
export interface TableContextStateInterface {
  content: TableContentInterface
  errors?: TableErrors
  expanded?: TableRowExpanded
  focus?: string | null
  items: TableItemInterface
  rowId: string
  selected?: TableRowSelected | null
  view: TableViewTypes
}

export interface TableContentInterface {
  caption?: TableCaptionInterface | null
  schema: { [key: string]: TableSchemaInterface }
  rowDetail: TableRowDetailInterface | null
  table: TableInterface | null
  toolbar?: TableToolbarInterface | null
}

export interface TableErrors {
  [key: string]: TableErrorMessageType
}

export type TableErrorMessageType = {
  message: string | null
  showError: boolean
}

export interface TableRowExpanded {
  [key: string]: boolean
}
export interface TableItemInterface {
  [key: string]: any
}

export interface TableRowSelected {
  [key: string]: boolean
}

export type TableViewTypes = typeof TABULAR_TABLE | typeof JSON_TABLE

// Table Context
export interface TableContextInterface
  extends TableEventsInterface,
    TableContextStateInterface {
  dispatch: (action: TableActionTypes) => void
}

export interface TableContextDispatchInterface {
  type: string
  payload?: any
}

export interface TableContextProviderInterface
  extends ThemeComponentInterface,
    TableContextStateInterface,
    TableEventsInterface {
  children?: React.ReactNode
  dispatch: any
}

// Table
export interface TableInterface extends ThemeComponentInterface {
  condensed?: boolean
  expandable?: boolean
  header?: TableHeadInterface
  hover?: boolean
  onSelect?: any
}

// Table Column
export interface TableSchemaInterface {
  children?: any
  column: string
  heading: string
  input?: { [key: string]: any } | boolean
  required?: boolean
  type?: string
  validation?: TableValidationType<any>
}

export type TableValidationType<T> = (
  value: string,
  row: T,
  items: T[]
) => string | void

// Table Head
export interface TableHeadInterface extends ThemeComponentInterface {
  expandable?: boolean
  onSelect?: any
}

export interface TableHeadingInterface extends ThemeComponentInterface {
  children?: any
  heading: string
}

// Table Caption
export interface TableCaptionInterface extends ThemeComponentInterface {}

// Table Toolbar
export interface TableToolbarInterface extends ToolbarInterface {}

// Table Body
export interface TableBodyInterface extends ThemeComponentInterface {}

// Table Row
export interface TableRowsInterface extends ThemeComponentInterface {}

// Table cell
export interface TableCellInterface
  extends Pick<
    TableEventsInterface,
    'onBlur' | 'onFocus' | 'onChange' | 'onToggleError'
  > {
  error: Partial<TableErrorMessageType>
  id: string
  type: string
  value: string
  control?: any
}

//Table Row Detail
export interface TableRowDetailInterface {
  //   children: any;
}

// Table View
export interface TableViewInterface extends ThemeComponentInterface {
  caption?: TableCaptionInterface
  header?: TableHeadInterface
  onSelect?: TableCellEventType
  rowDetail?: TableRowDetailInterface
}
