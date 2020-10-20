import React from 'react'
import { ContentCopyIcon } from '@redesign-system/material-icons/ContentCopyIcon'
import { DeleteIcon } from '@redesign-system/material-icons/DeleteIcon'
import { DownloadIcon } from '@redesign-system/material-icons/DownloadIcon'
import { FileDocumentEditIcon } from '@redesign-system/material-icons/FileDocumentEditIcon'
import { PlusIcon } from '@redesign-system/material-icons/PlusIcon'

import { ThemeProvider } from '@redesign-system/ui-core'
import { Toolbar } from './Toolbar'
import { ButtonIcon } from '../ButtonIcon'

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
