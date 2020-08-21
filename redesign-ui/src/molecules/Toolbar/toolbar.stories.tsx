import React from 'react'

import { ThemeProvider } from '@redesign/ui-core'
import { Toolbar } from './Toolbar'
import { ButtonIcon } from '../ButtonIcon'

import {
  ContentCopyIcon,
  DeleteIcon,
  DownloadIcon,
  FileDocumentEditIcon,
  PlusIcon,
} from '@redesign/material-icons'

export default {
  title: 'Components/Molecules/Toolbar',
  component: Toolbar,
}

export const Default = () => (
  <ThemeProvider>
    <Toolbar>
      <ButtonIcon alt="add" appearance="PRIMARY_ACTION" icon={PlusIcon}>
        Add
      </ButtonIcon>
      <ButtonIcon alt="copy" appearance="PRIMARY_ACTION" icon={ContentCopyIcon}>
        Copy
      </ButtonIcon>
      <ButtonIcon
        alt="edit"
        appearance="PRIMARY_ACTION"
        icon={FileDocumentEditIcon}
      >
        Edit
      </ButtonIcon>
      <ButtonIcon alt="delete" appearance="PRIMARY_ACTION" icon={DeleteIcon}>
        Delete
      </ButtonIcon>
      <ButtonIcon
        alt="download"
        appearance="PRIMARY_ACTION"
        icon={DownloadIcon}
      >
        Download
      </ButtonIcon>
    </Toolbar>
  </ThemeProvider>
)
