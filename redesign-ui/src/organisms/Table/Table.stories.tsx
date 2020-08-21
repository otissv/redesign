import React from 'react'

import { ThemeProvider } from '@redesign/ui-core'
import { TableSchema } from './TableSchema'
import { TableRowDetail, useTableRowDetail } from './TableRowDetail'
import { TableProvider } from './TableProvider'
import { ButtonIcon } from '../../molecules/ButtonIcon'
import { TableToolbar } from './TableToolbar'
import {
  ContentCopyIcon,
  DownloadIcon,
  CodeJsonIcon,
  TableLargeIcon,
} from '@redesign/material-icons'

import {
  ButtonGroupProvider,
  ButtonGroup,
  ButtonGroupButtonIcon,
} from '../../molecules/ButtonGroup'
import { TableValidationType } from './table.types'
import { TableCaption } from './TableCaption'
import { Table } from './Table'
export default {
  title: 'Components/Organisms/Table',
  component: Table,
}

interface TableStateInterface {
  id: string
  name: string
  endpoint: string
  ip: string
  repo: string
  port: string
}

const initialState: TableStateInterface[] = [...new Array(5)].map((_, i) => ({
  id: `id_${i}`,
  name: `Project ${i}`,
  endpoint: `http://project${i}.com`,
  ip: `0.0.0.${i}`,
  repo: `repo${i}`,
  port: `${i}000`,
  status: false,
}))

const nameValidation: TableValidationType<TableStateInterface> = (
  _value,
  _row,
  _state
) => {
  // console.log(value);
  return
}

const endpointValidation: TableValidationType<TableStateInterface> = (
  value,
  _row,
  _state
) => {
  if (value.length < 2) return 'Show be more than 2 characters'
  return
}

const portValidation: TableValidationType<TableStateInterface> = (
  _value,
  _row,
  _state
) => {
  // console.log(value);
  return
}

function handleOnInput<StateInterface>(_e: any, _row: StateInterface) {
  // console.log('onChange : ', arguments);
}

function handleOnBlur<StateInterface>(_e: any, _row: StateInterface) {
  // console.log('onBlur : ', arguments);
}

function handleOnFocus<StateInterface>(_e: any, _row: StateInterface) {
  // console.log('onFocus : ', arguments);
}

export const Default = () => (
  <ThemeProvider>
    <TableProvider rowId="id" items={initialState}>
      <TableSchema heading="ID" column="id" />
      <TableSchema heading="Name" column="name" />
      <TableSchema heading="Endpoint" column="endpoint" />
      <TableSchema heading="Port" column="port" />
      <Table />
    </TableProvider>
  </ThemeProvider>
)

export const Hover = () => (
  <ThemeProvider>
    <TableProvider items={initialState} rowId="id">
      <TableSchema heading="ID" column="id" />
      <TableSchema heading="Name" column="name" />
      <TableSchema heading="Endpoint" column="endpoint" />
      <TableSchema heading="Port" column="port" />
      <Table hover />
    </TableProvider>
  </ThemeProvider>
)

export const Condensed = () => (
  <ThemeProvider>
    <TableProvider items={initialState} rowId="id">
      <TableSchema heading="ID" column="id" />
      <TableSchema heading="Name" column="name" />
      <TableSchema heading="Endpoint" column="endpoint" />
      <TableSchema heading="Port" column="port" />
      <Table condensed />
    </TableProvider>
  </ThemeProvider>
)

export const Caption = () => (
  <ThemeProvider>
    <TableProvider items={initialState} rowId="id">
      <TableSchema heading="ID" column="id" />
      <TableSchema heading="Name" column="name" />
      <TableSchema heading="Endpoint" column="endpoint" />
      <TableSchema heading="Port" column="port" />

      <Table>
        <TableCaption>table-caption</TableCaption>
      </Table>
    </TableProvider>
  </ThemeProvider>
)

export const RowDetail = () => (
  <ThemeProvider>
    <TableProvider
      items={initialState}
      rowId="id"
      expanded={{
        id_0: true,
      }}
    >
      <TableSchema heading="ID" column="id" />

      <TableSchema heading="Name" column="name" />

      <TableSchema heading="Endpoint" column="endpoint" />

      <TableSchema heading="Port" column="port" />

      <Table>
        <TableRowDetail>
          <RowDetailContent />
        </TableRowDetail>
      </Table>
    </TableProvider>
  </ThemeProvider>
)

function RowDetailContent() {
  const { id, colSpan } = useTableRowDetail()

  return <td colSpan={colSpan}>Detail {id}</td>
}

export const Selectable = () => (
  <ThemeProvider>
    <TableProvider
      items={initialState}
      rowId="id"
      selected={{
        id_0: true,
      }}
    >
      <TableSchema heading="ID" column="id" />

      <TableSchema heading="Name" column="name" />

      <TableSchema heading="Endpoint" column="endpoint" />

      <TableSchema heading="Port" column="port" />
      <Table />
    </TableProvider>
  </ThemeProvider>
)

export const Cells = () => (
  <ThemeProvider>
    <TableProvider items={initialState} rowId="id">
      <TableSchema heading="ID" column="id" />
      <TableSchema heading="Name" column="name" />
      <TableSchema heading="Endpoint" column="endpoint" />
      <TableSchema heading="Port" column="port">
        <th style={{ textAlign: 'right', background: 'red' }}>
          {(p: any) => p.heading}
        </th>
        <td style={{ textAlign: 'right', background: 'red' }}>
          {(p: any) => p.value}
        </td>
      </TableSchema>
      <Table />
    </TableProvider>
  </ThemeProvider>
)

export const JSON_View = () => (
  <ThemeProvider>
    <TableProvider items={initialState} rowId="id" view="JSON">
      <TableSchema heading="ID" column="id" />
      <TableSchema heading="Name" column="name" />
      <TableSchema heading="Endpoint" column="endpoint" />
      <TableSchema heading="Port" column="port" />
      <Table />
    </TableProvider>
  </ThemeProvider>
)

export const Toolbar = () => (
  <ThemeProvider>
    <TableProvider items={initialState} rowId="id">
      <TableSchema heading="ID" column="id" />

      <TableSchema heading="Name" column="name" />

      <TableSchema heading="Endpoint" column="endpoint" />

      <TableSchema heading="Port" column="port" />

      <Table>
        <TableToolbar>
          <ButtonIcon icon={ContentCopyIcon} alt="Copy">
            Copy
          </ButtonIcon>
          <ButtonIcon icon={DownloadIcon} alt="Copy">
            Download
          </ButtonIcon>

          <ButtonGroupProvider appearance="SECONDARY">
            <ButtonGroup>
              <ButtonGroupButtonIcon
                active
                icon={TableLargeIcon}
                alt="Tabular data"
              >
                Tabular
              </ButtonGroupButtonIcon>
              <ButtonGroupButtonIcon icon={CodeJsonIcon} alt="JSON data">
                JSON
              </ButtonGroupButtonIcon>
            </ButtonGroup>
          </ButtonGroupProvider>
        </TableToolbar>
      </Table>
    </TableProvider>
  </ThemeProvider>
)

export const Editable = () => (
  <ThemeProvider>
    <TableProvider
      items={initialState}
      onBlur={handleOnBlur}
      onFocus={handleOnFocus}
      onChange={handleOnInput}
      rowId="id"
      selected
      focus="endpoint,id_0"
    >
      <TableSchema heading="ID" column="id" />

      <TableSchema
        heading="Name"
        column="name"
        type="textbox"
        input={{ placeholder: 'Enter name' }}
        validation={nameValidation}
      />

      <TableSchema
        heading="Endpoint"
        column="endpoint"
        type="textbox"
        required
        input={{ placeholder: 'Enter endpoint' }}
        validation={endpointValidation}
      />

      <TableSchema
        heading="Port"
        column="port"
        type="textbox"
        input={{ placeholder: 'Enter port' }}
        validation={portValidation}
      />

      <TableSchema heading="Status" column="status" type="checkbox" />

      <Table hover condensed />
    </TableProvider>
  </ThemeProvider>
)
