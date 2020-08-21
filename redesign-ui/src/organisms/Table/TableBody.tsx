import React, { FC, Fragment, useEffect, useMemo } from 'react'

import {
  TableBodyInterface,
  TableRowsInterface,
  TableCellInterface,
  TableTargetedEventType,
} from './table.types'

import { Base, useTheme } from '@redesign/ui-core'
import {
  tableHeaderTheme,
  tableInputTheme,
  tableErrorTheme,
} from './table.theme'
import { Checkbox } from '../../atoms/Checkbox'
import { useTable } from './TableContext'
import { AlertBoxIcon } from '@redesign/material-icons'
import { FormTextbox } from '../../molecules/FormTextbox'

export const TableBody: FC<TableBodyInterface> = function TableBody({
  as = 'tbody',
  className = '',
  css = '',
  rowDetail,
  ...propsRest
}) {
  const { theme } = useTheme()
  const cssList: any = useMemo(() => [tableHeaderTheme, css], [
    tableHeaderTheme,
    css,
  ])
  const classNames = useMemo(() => `TableBody ${className}`, [className])

  return (
    <Base
      as={as}
      className={classNames}
      css={cssList}
      theme={theme}
      {...propsRest}
    >
      <TableRows rowDetail={rowDetail} />
    </Base>
  )
}
TableBody.displayName = 'TableBody'

export const TableRows: FC<TableRowsInterface> = function TableRows({
  as = 'tr',
  className = '',
  css = '',
  rowDetail,
  ...propsRest
}) {
  const {
    items,
    focus,
    content,
    errors = {},
    onBlur,
    onFocus,
    onChange,
    onToggleError,
  } = useTable()

  useEffect(() => {
    if (focus) {
      const cell = window.document.getElementById(focus)
      cell?.focus()
    }
  }, [])

  const { theme } = useTheme()

  const classNames = useMemo(() => `TableRow ${className}`, [className])

  const rows = useMemo(
    () =>
      items.map((item: any) => {
        return (
          <Fragment key={item.id}>
            <Base
              as={as}
              className={classNames}
              css={css}
              theme={theme}
              {...propsRest}
              {...propsRest}
              id={item.id}
              key={item.id}
            >
              {Object.values(content.schema).map((schema: any) => {
                const td = { props: {} }

                const cellId = `${schema.column},${item.id}`

                const value = item[schema.column]

                return (
                  <td
                    className="TableCell"
                    id={`cell-${cellId}`}
                    {...td.props}
                    key={cellId}
                  >
                    <TableCell
                      error={errors[cellId]}
                      id={cellId}
                      type={schema.type}
                      value={value}
                      onBlur={onBlur}
                      onFocus={onFocus}
                      onChange={onChange}
                      onToggleError={onToggleError}
                    />
                  </td>
                )
              })}
            </Base>
          </Fragment>
        )
      }),
    [items]
  )

  return <Fragment>{rows}</Fragment>
}
TableRows.displayName = 'TableRows'

export function TableCell({
  error = {},
  id,
  type,
  value = '',
  onBlur,
  onFocus,
  onChange,
  control,
  onToggleError,
}: TableCellInterface) {
  const cssInputList: any = useMemo(() => [tableInputTheme, control?.css], [
    tableInputTheme,
    control,
  ])

  function handleOnToggle(e: any) {
    onToggleError && onToggleError(e, { id, showError: !error.showError })
  }

  const formTextboxErrorMessage = error.showError
    ? {
        children: error.message,
        css: tableErrorTheme,
      }
    : undefined

  const formControl = {
    css: cssInputList,
    onBlur(e: TableTargetedEventType) {
      onBlur(e)
    },
    onFocus(e: TableTargetedEventType) {
      onFocus(e)
    },
    onChange(e: React.SyntheticEvent<EventTarget>) {
      onChange(e)
    },
    ...control,
  }

  const textValue =
    typeof value !== 'string' && (value as any).toString
      ? (value as any).toString()
      : value

  switch (type) {
    case 'textbox': {
      return (
        <FormTextbox
          className="TableInput"
          label={{
            hidden: true,
          }}
          control={formControl}
          id={id}
          value={textValue}
          errorMessage={formTextboxErrorMessage}
        >
          {error.message && (
            <AlertBoxIcon
              id={`${id}-error-button`}
              role="button"
              appearance={'ERROR'}
              onClick={handleOnToggle}
              css="position: absolute; bottom: 0; right: 0; width: 18px;"
            />
          )}
        </FormTextbox>
      )
    }

    case 'checkbox': {
      //TODO change to FormCheckbox
      return <Checkbox id={id} checked={Boolean(value)} />
    }

    case 'text':
    default:
      return <Fragment>{textValue}</Fragment>
  }
}
TableCell.displayName = 'TableCell'

//       return (
//         <Fragment>
//           <Base
//             as={as}
//             className={classNames}
//             css={cssList}
//             theme={theme}
//             {...propsRest}
//             {...propsRest}
//             id={key as string}
//             key={key}
//           >
//             {rowDetail && (
//               <td
//                 id={`${key},__expand__`}
//                 className="TableCell TableCellExpand"
//                 onClick={onExpand}
//               >
//                 {isRowHidden ? <ChevronRightIcon /> : <ChevronDownIcon />}
//               </td>
//             )}
//             {Boolean(selected) && (
//               <td
//                 className="TableCell TableCellSelector"
//                 id={`${key},__select__`}
//               >
//                 <Checkbox
//                   id={`${key},__select__,content`}
//                   onClick={onSelect}
//                   checked={Boolean(selected?.[rowId])}
//                 />
//               </td>
//             )}
//             {cells(row)}
//           </Base>
//           {rowDetail && (
//             <TableContextProvider hidden={isRowHidden} id={key} row={row}>
//               <tr hidden={isRowHidden}>{rowDetail.props.children}</tr>
//             </TableContextProvider>
//           )}
//         </Fragment>
//       );

//   as = 'tbody',
//   children = [],
//   className = '',
//   css = '',
//   dispatch,
//   expanded = {},
//   items = [],
//   onBlur,
//   onExpand,
//   onFocus,
//   onChange,
//   onSelect,
//   onToggleError,
//   rowDetail,
//   schema,
//   selectable = false,
//   selected = {},
//   tr,
//   ...propsRest
// }) {
//   const { theme } = useTheme();
//   const cssList: any = useMemo(() => [tableHeaderTheme, css], [
//     tableHeaderTheme,
//     css,
//   ]);
//   const classNames = useMemo(() => `TableBody ${className}`, [className]);

//   const rows = useMemo(
//     () =>
//       map((rowId, row) => {
//         return (
//           <TableRow
//             {...tr}
//             dispatch={dispatch}
//             expanded={expanded}
//             onBlur={onBlur}
//             onExpand={onExpand}
//             onFocus={onFocus}
//             onChange={onChange}
//             onSelect={onSelect}
//             onToggleError={onToggleError}
//             row={row}
//             rowDetail={rowDetail}
//             rowId={rowId}
//             schema={schema}
//             selectable={selectable}
//             selected={selected}
//           >
//             {children}
//           </TableRow>
//         );
//       })(items),
//     [expanded, dispatch, rowDetail, selectable]
//   );

//   return (
//     <Base
//       as={as}
//       className={classNames}
//       css={cssList}
//       theme={theme}
//       {...propsRest}
//     >
//       {rows}
//     </Base>
//   );
// };

// TableBody.displayName = 'TableBody';

// const TableRow: FC<TableRowInterface> = function TableRow({
//   children,
//   dispatch,
//   expanded = {},
//   onBlur,
//   onExpand,
//   onFocus,
//   onChange,
//   onSelect,
//   onToggleError,
//   row,
//   rowDetail,
//   rowId,
//   schema,
//   selectable = false,
//   selected = {},
//   ...propsRest
// }: any) {
//   const columns = children.filter(
//     (c: any) => c.type.displayName === 'TableColumn'
//   );

//   const handleToggleRowClick = useCallback(function handleToggleRowClick(
//     e: any
//   ) {
//     const id = e.currentTarget.dataset.rowid;

//     dispatch({
//       type: TOGGLE_EXPANDED,
//       payload: id,
//     });

//     onExpand && onExpand(e, id);
//   },
//   []);

//   const rowHidden = !expanded[rowId];

//   const handleToggleRowSelect = useCallback(function handleToggleRowSelect(
//     e: any
//   ) {
//     const id = e.currentTarget.dataset.selectid;

//     dispatch({
//       type: TOGGLE_SELECTED,
//       payload: id,
//     });
//     onSelect && onSelect(e, id);
//   },
//   []);

//   const rowItems = useMemo(
//     () =>
//       columns.map(
//         ({ props: { input, column: columnId, ...propsRest } }: any) => {
//           const cell = Array.isArray(propsRest.children)
//             ? propsRest.children?.find((c: any) => c.type === 'td')
//             : null;

//           const id = `${columnId},${rowId}`;

//           return (
//             <TableCell
//               cell={cell}
//               columnId={columnId}
//               id={id}
//               input={input}
//               item={row[columnId]}
//               key={id}
//               onBlur={onBlur}
//               onFocus={onFocus}
//               onChange={onChange}
//               onToggleError={onToggleError}
//               schema={schema[columnId]}
//               rowId={rowId}
//               {...propsRest}
//             />
//           );
//         }
//       ),
//     [row, columns]
//   );

//   return (
//     <Fragment>
//       <Base as="tr" {...propsRest}>
//         {rowDetail && (
//           <td
//             data-rowid={rowId}
//             className="TableCell TableCellExpand"
//             onClick={handleToggleRowClick}
//           >
//             {rowHidden ? <ChevronRightIcon /> : <ChevronDownIcon />}
//           </td>
//         )}

//         {selectable && (
//           <td className="TableCell TableCellSelector">
//             <Checkbox
//               id=""
//               onClick={handleToggleRowSelect}
//               data-selectid={rowId}
//               checked={Boolean(selected[rowId])}
//             />
//           </td>
//         )}

//         {rowItems}
//       </Base>

//       {rowDetail && (
//         <tr hidden={rowHidden}>
//           {rowDetail.props.children({
//             ...row,
//             colSpan: columns.length + (rowDetail ? 1 : 0) + (selected ? +1 : 0),
//           })}
//         </tr>
//       )}
//     </Fragment>
//   );
// };
