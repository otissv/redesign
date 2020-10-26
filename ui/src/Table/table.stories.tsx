import React from 'react'
import { ThemeProvider } from '@redesign-system/ui-core'
import { ChevronRightIcon } from '@redesign-system/material-icons/ChevronRightIcon'
import { ChevronDownIcon } from '@redesign-system/material-icons/ChevronDownIcon'

import { Table } from './Table'
import { Checkbox } from '../Checkbox'
import { useSelected } from '../useSelected'
import { useBoolean } from '../useBoolean'
import { Maybe } from '../Maybe'
import { Toggle } from '../Toggle'

export default {
  title: 'Components/Table',
  component: Table,
}

function times(fn: (index: number) => any) {
  return (n: number) => [...new Array(n)].map((_, index) => fn(index))
}

const data = times(i => ({
  id: i.toString(),
  firstName: 'Marcelle',
  lastName: 'Rau',
  jobTitle: 'Dynamic Data Manager',
  jobArea: 'Accounts',
  role: 'admin',
}))(100)

export const Default = () => {
  const { boolean: selectAll, setBoolean: setSelectAll } = useBoolean()
  const { checked, onChecked, onCheckAllChange } = useSelected()
  const {
    state: expandState,
    checked: expanded,
    onChecked: onExpand,
  } = useSelected()

  const handleOnChecked = (e: any) => {
    onChecked(e)
    setSelectAll(false)
  }

  const handleOnSelectAllChange = (e: any) => {
    onCheckAllChange(data)(e)
    setSelectAll(e.target.checked)
  }

  return (
    <ThemeProvider>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>
              <Checkbox
                id="select_all"
                label="select row"
                onChange={handleOnSelectAllChange}
                checked={selectAll}
              />
            </th>
            <th>Name</th>
            <th>Title</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, firstName, lastName, jobTitle, jobArea, role }) => (
            <React.Fragment key={id}>
              <tr>
                <td>
                  <Toggle
                    id={id}
                    label="select row"
                    onChange={onExpand}
                    checked={expanded(id) || null}
                    css="top: 7px"
                  >
                    <ChevronDownIcon />
                    <ChevronRightIcon />
                  </Toggle>
                </td>
                <td>
                  <Checkbox
                    id={id}
                    label="select row"
                    onChange={handleOnChecked}
                    checked={checked(id) || null}
                  />
                </td>
                <td>
                  {firstName} {lastName}
                </td>
                <td>
                  {jobTitle}
                  <span style={{ display: 'block' }}>{jobArea}</span>
                </td>
                <td>{role}</td>
              </tr>
              <Maybe check={Boolean(expandState[id])}>
                <tr>
                  <td
                    colSpan={5}
                    style={{
                      background: '#525252',
                      paddingLeft: '20px',
                      borderBottom: `1px solid #525252`,
                    }}
                  >
                    <dl>
                      <dt>Name</dt>
                      <dd>
                        {firstName} {lastName}
                      </dd>
                      <dt>Job title</dt>
                      <dd>{jobTitle}</dd>
                      <dt>Role</dt>
                      <dd>{role}</dd>
                    </dl>
                  </td>
                </tr>
              </Maybe>
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </ThemeProvider>
  )
}
