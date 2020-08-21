import React from 'react'
import { Base, ThemeProvider, useTheme } from '@redesign/ui-core'

import { Icon } from './Icon'

import { AlertBoxOutlineIcon } from './icons/AlertBoxOutline'
import { AlertBoxIcon } from './icons/AlertBox'
import { AlertCircleCheckOutlineIcon } from './icons/AlertCircleCheckOutline'
import { AlertCircleCheckIcon } from './icons/AlertCircleCheck'
import { AlertCircleOutlineIcon } from './icons/AlertCircleOutline'
import { AlertCircleIcon } from './icons/AlertCircle'
import { AlertDecagramOutlineIcon } from './icons/AlertDecagramOutline'
import { AlertDecagramIcon } from './icons/AlertDecagram'
import { AlertMinusOutlineIcon } from './icons/AlertMinusOutline'
import { AlertMinusIcon } from './icons/AlertMinus'
import { AlertOctagonOutlineIcon } from './icons/AlertOctagonOutline'
import { AlertOctagonIcon } from './icons/AlertOctagon'
import { AlertOctagramOutlineIcon } from './icons/AlertOctagramOutline'
import { AlertOctagramIcon } from './icons/AlertOctagram'
import { AlertOutlineIcon } from './icons/AlertOutline'
import { AlertPlusOutlineIcon } from './icons/AlertPlusOutline'
import { AlertPlusIcon } from './icons/AlertPlus'
import { AlertRemoveOutlineIcon } from './icons/AlertRemoveOutline'
import { AlertRemoveIcon } from './icons/AlertRemove'
import { AlertRhombusOutlineIcon } from './icons/AlertRhombusOutline'
import { AlertRhombusIcon } from './icons/AlertRhombus'
import { AlertIcon } from './icons/Alert'
import { CodeArrayIcon } from './icons/CodeArray'
import { CodeBracesBoxIcon } from './icons/CodeBracesBox'
import { CodeBracesIcon } from './icons/CodeBraces'
import { CodeBracketsIcon } from './icons/CodeBrackets'
import { CodeEqualIcon } from './icons/CodeEqual'
import { CodeGreaterThanOrEqualIcon } from './icons/CodeGreaterThanOrEqual'
import { CodeGreaterThanIcon } from './icons/CodeGreaterThan'
import { CodeJsonIcon } from './icons/CodeJson'
import { CodeLessThanOrEqualIcon } from './icons/CodeLessThanOrEqual'
import { CodeLessThanIcon } from './icons/CodeLessThan'
import { CodeNotEqualVariantIcon } from './icons/CodeNotEqualVariant'
import { CodeNotEqualIcon } from './icons/CodeNotEqual'
import { CodeParenthesesBoxIcon } from './icons/CodeParenthesesBox'
import { CodeParenthesesIcon } from './icons/CodeParentheses'
import { CodeStringIcon } from './icons/CodeString'
import { CodeTagsCheckIcon } from './icons/CodeTagsCheck'
import { CodeTagsIcon } from './icons/CodeTags'
import { ContentCopyIcon } from './icons/ContentCopy'
import { ContentCutIcon } from './icons/ContentCut'
import { ContentDuplicateIcon } from './icons/ContentDuplicate'
import { ContentPasteIcon } from './icons/ContentPaste'
import { ContentSaveAlertOutlineIcon } from './icons/ContentSaveAlertOutline'
import { ContentSaveAlertIcon } from './icons/ContentSaveAlert'
import { ContentSaveAllOutlineIcon } from './icons/ContentSaveAllOutline'
import { ContentSaveAllIcon } from './icons/ContentSaveAll'
import { ContentSaveCogOutlineIcon } from './icons/ContentSaveCogOutline'
import { ContentSaveCogIcon } from './icons/ContentSaveCog'
import { ContentSaveEditOutlineIcon } from './icons/ContentSaveEditOutline'
import { ContentSaveEditIcon } from './icons/ContentSaveEdit'
import { ContentSaveMoveOutlineIcon } from './icons/ContentSaveMoveOutline'
import { ContentSaveMoveIcon } from './icons/ContentSaveMove'
import { ContentSaveOutlineIcon } from './icons/ContentSaveOutline'
import { ContentSaveSettingsOutlineIcon } from './icons/ContentSaveSettingsOutline'
import { ContentSaveSettingsIcon } from './icons/ContentSaveSettings'
import { ContentSaveIcon } from './icons/ContentSave'
import { DeleteAlertOutlineIcon } from './icons/DeleteAlertOutline'
import { DeleteAlertIcon } from './icons/DeleteAlert'
import { DeleteCircleOutlineIcon } from './icons/DeleteCircleOutline'
import { DeleteCircleIcon } from './icons/DeleteCircle'
import { DeleteEmptyOutlineIcon } from './icons/DeleteEmptyOutline'
import { DeleteEmptyIcon } from './icons/DeleteEmpty'
import { DeleteForeverOutlineIcon } from './icons/DeleteForeverOutline'
import { DeleteForeverIcon } from './icons/DeleteForever'
import { DeleteOffOutlineIcon } from './icons/DeleteOffOutline'
import { DeleteOffIcon } from './icons/DeleteOff'
import { DeleteOutlineIcon } from './icons/DeleteOutline'
import { DeleteRestoreIcon } from './icons/DeleteRestore'
import { DeleteSweepOutlineIcon } from './icons/DeleteSweepOutline'
import { DeleteSweepIcon } from './icons/DeleteSweep'
import { DeleteVariantIcon } from './icons/DeleteVariant'
import { DeleteIcon } from './icons/Delete'
import { DownloadBoxOutlineIcon } from './icons/DownloadBoxOutline'
import { DownloadBoxIcon } from './icons/DownloadBox'
import { DownloadCircleOutlineIcon } from './icons/DownloadCircleOutline'
import { DownloadCircleIcon } from './icons/DownloadCircle'
import { DownloadLockOutlineIcon } from './icons/DownloadLockOutline'
import { DownloadLockIcon } from './icons/DownloadLock'
import { DownloadMultipleIcon } from './icons/DownloadMultiple'
import { DownloadNetworkOutlineIcon } from './icons/DownloadNetworkOutline'
import { DownloadNetworkIcon } from './icons/DownloadNetwork'
import { DownloadOffOutlineIcon } from './icons/DownloadOffOutline'
import { DownloadOffIcon } from './icons/DownloadOff'
import { DownloadOutlineIcon } from './icons/DownloadOutline'
import { DownloadIcon } from './icons/Download'
import { FileAccountOutlineIcon } from './icons/FileAccountOutline'
import { FileAccountIcon } from './icons/FileAccount'
import { FileAlertOutlineIcon } from './icons/FileAlertOutline'
import { FileAlertIcon } from './icons/FileAlert'
import { FileCabinetIcon } from './icons/FileCabinet'
import { FileCadBoxIcon } from './icons/FileCadBox'
import { FileCadIcon } from './icons/FileCad'
import { FileCancelOutlineIcon } from './icons/FileCancelOutline'
import { FileCancelIcon } from './icons/FileCancel'
import { FileCertificateOutlineIcon } from './icons/FileCertificateOutline'
import { FileCertificateIcon } from './icons/FileCertificate'
import { FileChartOutlineIcon } from './icons/FileChartOutline'
import { FileChartIcon } from './icons/FileChart'
import { FileCheckOutlineIcon } from './icons/FileCheckOutline'
import { FileCheckIcon } from './icons/FileCheck'
import { FileClockOutlineIcon } from './icons/FileClockOutline'
import { FileClockIcon } from './icons/FileClock'
import { FileCloudOutlineIcon } from './icons/FileCloudOutline'
import { FileCloudIcon } from './icons/FileCloud'
import { FileCodeOutlineIcon } from './icons/FileCodeOutline'
import { FileCodeIcon } from './icons/FileCode'
import { FileCogOutlineIcon } from './icons/FileCogOutline'
import { FileCogIcon } from './icons/FileCog'
import { FileCompareIcon } from './icons/FileCompare'
import { FileDelimitedOutlineIcon } from './icons/FileDelimitedOutline'
import { FileDelimitedIcon } from './icons/FileDelimited'
import { FileDocumentEditOutlineIcon } from './icons/FileDocumentEditOutline'
import { FileDocumentEditIcon } from './icons/FileDocumentEdit'
import { FileDocumentOutlineIcon } from './icons/FileDocumentOutline'
import { FileDocumentIcon } from './icons/FileDocument'
import { FileDownloadOutlineIcon } from './icons/FileDownloadOutline'
import { FileDownloadIcon } from './icons/FileDownload'
import { FileEditOutlineIcon } from './icons/FileEditOutline'
import { FileEditIcon } from './icons/FileEdit'
import { FileExcelBoxOutlineIcon } from './icons/FileExcelBoxOutline'
import { FileExcelBoxIcon } from './icons/FileExcelBox'
import { FileExcelOutlineIcon } from './icons/FileExcelOutline'
import { FileExcelIcon } from './icons/FileExcel'
import { FileExportOutlineIcon } from './icons/FileExportOutline'
import { FileExportIcon } from './icons/FileExport'
import { FileEyeOutlineIcon } from './icons/FileEyeOutline'
import { FileEyeIcon } from './icons/FileEye'
import { FileFindOutlineIcon } from './icons/FileFindOutline'
import { FileFindIcon } from './icons/FileFind'
import { FileHiddenIcon } from './icons/FileHidden'
import { FileImageOutlineIcon } from './icons/FileImageOutline'
import { FileImageIcon } from './icons/FileImage'
import { FileImportOutlineIcon } from './icons/FileImportOutline'
import { FileImportIcon } from './icons/FileImport'
import { FileKeyOutlineIcon } from './icons/FileKeyOutline'
import { FileKeyIcon } from './icons/FileKey'
import { FileLinkOutlineIcon } from './icons/FileLinkOutline'
import { FileLinkIcon } from './icons/FileLink'
import { FileLockOutlineIcon } from './icons/FileLockOutline'
import { FileLockIcon } from './icons/FileLock'
import { FileMoveOutlineIcon } from './icons/FileMoveOutline'
import { FileMoveIcon } from './icons/FileMove'
import { FileMultipleOutlineIcon } from './icons/FileMultipleOutline'
import { FileMultipleIcon } from './icons/FileMultiple'
import { FileMusicOutlineIcon } from './icons/FileMusicOutline'
import { FileMusicIcon } from './icons/FileMusic'
import { FileOutlineIcon } from './icons/FileOutline'
import { FilePdfBoxOutlineIcon } from './icons/FilePdfBoxOutline'
import { FilePdfBoxIcon } from './icons/FilePdfBox'
import { FilePdfOutlineIcon } from './icons/FilePdfOutline'
import { FilePdfIcon } from './icons/FilePdf'
import { FilePercentOutlineIcon } from './icons/FilePercentOutline'
import { FilePercentIcon } from './icons/FilePercent'
import { FilePhoneOutlineIcon } from './icons/FilePhoneOutline'
import { FilePhoneIcon } from './icons/FilePhone'
import { FilePlusOutlineIcon } from './icons/FilePlusOutline'
import { FilePlusIcon } from './icons/FilePlus'
import { FilePowerpointBoxOutlineIcon } from './icons/FilePowerpointBoxOutline'
import { FilePowerpointBoxIcon } from './icons/FilePowerpointBox'
import { FilePowerpointOutlineIcon } from './icons/FilePowerpointOutline'
import { FilePowerpointIcon } from './icons/FilePowerpoint'
import { FilePresentationBoxIcon } from './icons/FilePresentationBox'
import { FileQuestionOutlineIcon } from './icons/FileQuestionOutline'
import { FileQuestionIcon } from './icons/FileQuestion'
import { FileRefreshOutlineIcon } from './icons/FileRefreshOutline'
import { FileRefreshIcon } from './icons/FileRefresh'
import { FileRemoveOutlineIcon } from './icons/FileRemoveOutline'
import { FileRemoveIcon } from './icons/FileRemove'
import { FileReplaceOutlineIcon } from './icons/FileReplaceOutline'
import { FileReplaceIcon } from './icons/FileReplace'
import { FileRestoreOutlineIcon } from './icons/FileRestoreOutline'
import { FileRestoreIcon } from './icons/FileRestore'
import { FileSearchOutlineIcon } from './icons/FileSearchOutline'
import { FileSearchIcon } from './icons/FileSearch'
import { FileSendOutlineIcon } from './icons/FileSendOutline'
import { FileSendIcon } from './icons/FileSend'
import { FileSettingsOutlineIcon } from './icons/FileSettingsOutline'
import { FileSettingsIcon } from './icons/FileSettings'
import { FileStarOutlineIcon } from './icons/FileStarOutline'
import { FileStarIcon } from './icons/FileStar'
import { FileSwapOutlineIcon } from './icons/FileSwapOutline'
import { FileSwapIcon } from './icons/FileSwap'
import { FileSyncOutlineIcon } from './icons/FileSyncOutline'
import { FileSyncIcon } from './icons/FileSync'
import { FileTableBoxMultipleOutlineIcon } from './icons/FileTableBoxMultipleOutline'
import { FileTableBoxMultipleIcon } from './icons/FileTableBoxMultiple'
import { FileTableBoxOutlineIcon } from './icons/FileTableBoxOutline'
import { FileTableBoxIcon } from './icons/FileTableBox'
import { FileTableOutlineIcon } from './icons/FileTableOutline'
import { FileTableIcon } from './icons/FileTable'
import { FileTreeOutlineIcon } from './icons/FileTreeOutline'
import { FileTreeIcon } from './icons/FileTree'
import { FileUndoOutlineIcon } from './icons/FileUndoOutline'
import { FileUndoIcon } from './icons/FileUndo'
import { FileUploadOutlineIcon } from './icons/FileUploadOutline'
import { FileUploadIcon } from './icons/FileUpload'
import { FileVideoOutlineIcon } from './icons/FileVideoOutline'
import { FileVideoIcon } from './icons/FileVideo'
import { FileWordBoxOutlineIcon } from './icons/FileWordBoxOutline'
import { FileWordBoxIcon } from './icons/FileWordBox'
import { FileWordOutlineIcon } from './icons/FileWordOutline'
import { FileWordIcon } from './icons/FileWord'
import { FileIcon } from './icons/File'
import { HomeIcon } from './icons/Home'
import { MenuDownOutlineIcon } from './icons/MenuDownOutline'
import { MenuDownIcon } from './icons/MenuDown'
import { MenuLeftOutlineIcon } from './icons/MenuLeftOutline'
import { MenuLeftIcon } from './icons/MenuLeft'
import { MenuOpenIcon } from './icons/MenuOpen'
import { MenuRightOutlineIcon } from './icons/MenuRightOutline'
import { MenuRightIcon } from './icons/MenuRight'
import { MenuSwapOutlineIcon } from './icons/MenuSwapOutline'
import { MenuSwapIcon } from './icons/MenuSwap'
import { MenuUpOutlineIcon } from './icons/MenuUpOutline'
import { MenuUpIcon } from './icons/MenuUp'
import { MenuIcon } from './icons/Menu'
import { PlusBoxMultipleOutlineIcon } from './icons/PlusBoxMultipleOutline'
import { PlusBoxMultipleIcon } from './icons/PlusBoxMultiple'
import { PlusBoxOutlineIcon } from './icons/PlusBoxOutline'
import { PlusBoxIcon } from './icons/PlusBox'
import { PlusCircleMultipleOutlineIcon } from './icons/PlusCircleMultipleOutline'
import { PlusCircleMultipleIcon } from './icons/PlusCircleMultiple'
import { PlusCircleOutlineIcon } from './icons/PlusCircleOutline'
import { PlusCircleIcon } from './icons/PlusCircle'
import { PlusMinusBoxIcon } from './icons/PlusMinusBox'
import { PlusMinusVariantIcon } from './icons/PlusMinusVariant'
import { PlusMinusIcon } from './icons/PlusMinus'
import { PlusNetworkOutlineIcon } from './icons/PlusNetworkOutline'
import { PlusNetworkIcon } from './icons/PlusNetwork'
import { PlusOneIcon } from './icons/PlusOne'
import { PlusOutlineIcon } from './icons/PlusOutline'
import { PlusIcon } from './icons/Plus'
import { TableAccountIcon } from './icons/TableAccount'
import { TableAlertIcon } from './icons/TableAlert'
import { TableArrowDownIcon } from './icons/TableArrowDown'
import { TableArrowLeftIcon } from './icons/TableArrowLeft'
import { TableArrowRightIcon } from './icons/TableArrowRight'
import { TableArrowUpIcon } from './icons/TableArrowUp'
import { TableBorderIcon } from './icons/TableBorder'
import { TableCancelIcon } from './icons/TableCancel'
import { TableChairIcon } from './icons/TableChair'
import { TableCheckIcon } from './icons/TableCheck'
import { TableClockIcon } from './icons/TableClock'
import { TableCogIcon } from './icons/TableCog'
import { TableColumnPlusAfterIcon } from './icons/TableColumnPlusAfter'
import { TableColumnPlusBeforeIcon } from './icons/TableColumnPlusBefore'
import { TableColumnRemoveIcon } from './icons/TableColumnRemove'
import { TableColumnWidthIcon } from './icons/TableColumnWidth'
import { TableColumnIcon } from './icons/TableColumn'
import { TableEditIcon } from './icons/TableEdit'
import { TableEyeOffIcon } from './icons/TableEyeOff'
import { TableEyeIcon } from './icons/TableEye'
import { TableFurnitureIcon } from './icons/TableFurniture'
import { TableHeadersEyeOffIcon } from './icons/TableHeadersEyeOff'
import { TableHeadersEyeIcon } from './icons/TableHeadersEye'
import { TableHeartIcon } from './icons/TableHeart'
import { TableKeyIcon } from './icons/TableKey'
import { TableLargePlusIcon } from './icons/TableLargePlus'
import { TableLargeRemoveIcon } from './icons/TableLargeRemove'
import { TableLargeIcon } from './icons/TableLarge'
import { TableLockIcon } from './icons/TableLock'
import { TableMergeCellsIcon } from './icons/TableMergeCells'
import { TableMinusIcon } from './icons/TableMinus'
import { TableMultipleIcon } from './icons/TableMultiple'
import { TableNetworkIcon } from './icons/TableNetwork'
import { TableOfContentsIcon } from './icons/TableOfContents'
import { TableOffIcon } from './icons/TableOff'
import { TablePlusIcon } from './icons/TablePlus'
import { TableRefreshIcon } from './icons/TableRefresh'
import { TableRemoveIcon } from './icons/TableRemove'
import { TableRowHeightIcon } from './icons/TableRowHeight'
import { TableRowPlusAfterIcon } from './icons/TableRowPlusAfter'
import { TableRowPlusBeforeIcon } from './icons/TableRowPlusBefore'
import { TableRowRemoveIcon } from './icons/TableRowRemove'
import { TableRowIcon } from './icons/TableRow'
import { TableSearchIcon } from './icons/TableSearch'
import { TableSettingsIcon } from './icons/TableSettings'
import { TableSplitCellIcon } from './icons/TableSplitCell'
import { TableStarIcon } from './icons/TableStar'
import { TableSyncIcon } from './icons/TableSync'
import { TableTennisIcon } from './icons/TableTennis'
import { TableIcon } from './icons/Table'

export default {
  title: 'Icons',
  component: Icon,
}

export const Default = () => {
  const { theme } = useTheme()

  return (
    <ThemeProvider>
      <Base theme={theme} match margin={2} display="inline-block">
        <AlertBoxOutlineIcon />
        <AlertBoxIcon />
        <AlertCircleCheckOutlineIcon />
        <AlertCircleCheckIcon />
        <AlertCircleOutlineIcon />
        <AlertCircleIcon />
        <AlertDecagramOutlineIcon />
        <AlertDecagramIcon />
        <AlertMinusOutlineIcon />
        <AlertMinusIcon />
        <AlertOctagonOutlineIcon />
        <AlertOctagonIcon />
        <AlertOctagramOutlineIcon />
        <AlertOctagramIcon />
        <AlertOutlineIcon />
        <AlertPlusOutlineIcon />
        <AlertPlusIcon />
        <AlertRemoveOutlineIcon />
        <AlertRemoveIcon />
        <AlertRhombusOutlineIcon />
        <AlertRhombusIcon />
        <AlertIcon />
        <CodeArrayIcon />
        <CodeBracesBoxIcon />
        <CodeBracesIcon />
        <CodeBracketsIcon />
        <CodeEqualIcon />
        <CodeGreaterThanOrEqualIcon />
        <CodeGreaterThanIcon />
        <CodeJsonIcon />
        <CodeLessThanOrEqualIcon />
        <CodeLessThanIcon />
        <CodeNotEqualVariantIcon />
        <CodeNotEqualIcon />
        <CodeParenthesesBoxIcon />
        <CodeParenthesesIcon />
        <CodeStringIcon />
        <CodeTagsCheckIcon />
        <CodeTagsIcon />
        <ContentCopyIcon />
        <ContentCutIcon />
        <ContentDuplicateIcon />
        <ContentPasteIcon />
        <ContentSaveAlertOutlineIcon />
        <ContentSaveAlertIcon />
        <ContentSaveAllOutlineIcon />
        <ContentSaveAllIcon />
        <ContentSaveCogOutlineIcon />
        <ContentSaveCogIcon />
        <ContentSaveEditOutlineIcon />
        <ContentSaveEditIcon />
        <ContentSaveMoveOutlineIcon />
        <ContentSaveMoveIcon />
        <ContentSaveOutlineIcon />
        <ContentSaveSettingsOutlineIcon />
        <ContentSaveSettingsIcon />
        <ContentSaveIcon />
        <DeleteAlertOutlineIcon />
        <DeleteAlertIcon />
        <DeleteCircleOutlineIcon />
        <DeleteCircleIcon />
        <DeleteEmptyOutlineIcon />
        <DeleteEmptyIcon />
        <DeleteForeverOutlineIcon />
        <DeleteForeverIcon />
        <DeleteOffOutlineIcon />
        <DeleteOffIcon />
        <DeleteOutlineIcon />
        <DeleteRestoreIcon />
        <DeleteSweepOutlineIcon />
        <DeleteSweepIcon />
        <DeleteVariantIcon />
        <DeleteIcon />
        <DownloadBoxOutlineIcon />
        <DownloadBoxIcon />
        <DownloadCircleOutlineIcon />
        <DownloadCircleIcon />
        <DownloadLockOutlineIcon />
        <DownloadLockIcon />
        <DownloadMultipleIcon />
        <DownloadNetworkOutlineIcon />
        <DownloadNetworkIcon />
        <DownloadOffOutlineIcon />
        <DownloadOffIcon />
        <DownloadOutlineIcon />
        <DownloadIcon />
        <FileAccountOutlineIcon />
        <FileAccountIcon />
        <FileAlertOutlineIcon />
        <FileAlertIcon />
        <FileCabinetIcon />
        <FileCadBoxIcon />
        <FileCadIcon />
        <FileCancelOutlineIcon />
        <FileCancelIcon />
        <FileCertificateOutlineIcon />
        <FileCertificateIcon />
        <FileChartOutlineIcon />
        <FileChartIcon />
        <FileCheckOutlineIcon />
        <FileCheckIcon />
        <FileClockOutlineIcon />
        <FileClockIcon />
        <FileCloudOutlineIcon />
        <FileCloudIcon />
        <FileCodeOutlineIcon />
        <FileCodeIcon />
        <FileCogOutlineIcon />
        <FileCogIcon />
        <FileCompareIcon />
        <FileDelimitedOutlineIcon />
        <FileDelimitedIcon />
        <FileDocumentEditOutlineIcon />
        <FileDocumentEditIcon />
        <FileDocumentOutlineIcon />
        <FileDocumentIcon />
        <FileDownloadOutlineIcon />
        <FileDownloadIcon />
        <FileEditOutlineIcon />
        <FileEditIcon />
        <FileExcelBoxOutlineIcon />
        <FileExcelBoxIcon />
        <FileExcelOutlineIcon />
        <FileExcelIcon />
        <FileExportOutlineIcon />
        <FileExportIcon />
        <FileEyeOutlineIcon />
        <FileEyeIcon />
        <FileFindOutlineIcon />
        <FileFindIcon />
        <FileHiddenIcon />
        <FileImageOutlineIcon />
        <FileImageIcon />
        <FileImportOutlineIcon />
        <FileImportIcon />
        <FileKeyOutlineIcon />
        <FileKeyIcon />
        <FileLinkOutlineIcon />
        <FileLinkIcon />
        <FileLockOutlineIcon />
        <FileLockIcon />
        <FileMoveOutlineIcon />
        <FileMoveIcon />
        <FileMultipleOutlineIcon />
        <FileMultipleIcon />
        <FileMusicOutlineIcon />
        <FileMusicIcon />
        <FileOutlineIcon />
        <FilePdfBoxOutlineIcon />
        <FilePdfBoxIcon />
        <FilePdfOutlineIcon />
        <FilePdfIcon />
        <FilePercentOutlineIcon />
        <FilePercentIcon />
        <FilePhoneOutlineIcon />
        <FilePhoneIcon />
        <FilePlusOutlineIcon />
        <FilePlusIcon />
        <FilePowerpointBoxOutlineIcon />
        <FilePowerpointBoxIcon />
        <FilePowerpointOutlineIcon />
        <FilePowerpointIcon />
        <FilePresentationBoxIcon />
        <FileQuestionOutlineIcon />
        <FileQuestionIcon />
        <FileRefreshOutlineIcon />
        <FileRefreshIcon />
        <FileRemoveOutlineIcon />
        <FileRemoveIcon />
        <FileReplaceOutlineIcon />
        <FileReplaceIcon />
        <FileRestoreOutlineIcon />
        <FileRestoreIcon />
        <FileSearchOutlineIcon />
        <FileSearchIcon />
        <FileSendOutlineIcon />
        <FileSendIcon />
        <FileSettingsOutlineIcon />
        <FileSettingsIcon />
        <FileStarOutlineIcon />
        <FileStarIcon />
        <FileSwapOutlineIcon />
        <FileSwapIcon />
        <FileSyncOutlineIcon />
        <FileSyncIcon />
        <FileTableBoxMultipleOutlineIcon />
        <FileTableBoxMultipleIcon />
        <FileTableBoxOutlineIcon />
        <FileTableBoxIcon />
        <FileTableOutlineIcon />
        <FileTableIcon />
        <FileTreeOutlineIcon />
        <FileTreeIcon />
        <FileUndoOutlineIcon />
        <FileUndoIcon />
        <FileUploadOutlineIcon />
        <FileUploadIcon />
        <FileVideoOutlineIcon />
        <FileVideoIcon />
        <FileWordBoxOutlineIcon />
        <FileWordBoxIcon />
        <FileWordOutlineIcon />
        <FileWordIcon />
        <FileIcon />
        <HomeIcon />
        <MenuDownOutlineIcon />
        <MenuDownIcon />
        <MenuLeftOutlineIcon />
        <MenuLeftIcon />
        <MenuOpenIcon />
        <MenuRightOutlineIcon />
        <MenuRightIcon />
        <MenuSwapOutlineIcon />
        <MenuSwapIcon />
        <MenuUpOutlineIcon />
        <MenuUpIcon />
        <MenuIcon />
        <PlusBoxMultipleOutlineIcon />
        <PlusBoxMultipleIcon />
        <PlusBoxOutlineIcon />
        <PlusBoxIcon />
        <PlusCircleMultipleOutlineIcon />
        <PlusCircleMultipleIcon />
        <PlusCircleOutlineIcon />
        <PlusCircleIcon />
        <PlusMinusBoxIcon />
        <PlusMinusVariantIcon />
        <PlusMinusIcon />
        <PlusNetworkOutlineIcon />
        <PlusNetworkIcon />
        <PlusOneIcon />
        <PlusOutlineIcon />
        <PlusIcon />
        <TableAccountIcon />
        <TableAlertIcon />
        <TableArrowDownIcon />
        <TableArrowLeftIcon />
        <TableArrowRightIcon />
        <TableArrowUpIcon />
        <TableBorderIcon />
        <TableCancelIcon />
        <TableChairIcon />
        <TableCheckIcon />
        <TableClockIcon />
        <TableCogIcon />
        <TableColumnPlusAfterIcon />
        <TableColumnPlusBeforeIcon />
        <TableColumnRemoveIcon />
        <TableColumnWidthIcon />
        <TableColumnIcon />
        <TableEditIcon />
        <TableEyeOffIcon />
        <TableEyeIcon />
        <TableFurnitureIcon />
        <TableHeadersEyeOffIcon />
        <TableHeadersEyeIcon />
        <TableHeartIcon />
        <TableKeyIcon />
        <TableLargePlusIcon />
        <TableLargeRemoveIcon />
        <TableLargeIcon />
        <TableLockIcon />
        <TableMergeCellsIcon />
        <TableMinusIcon />
        <TableMultipleIcon />
        <TableNetworkIcon />
        <TableOfContentsIcon />
        <TableOffIcon />
        <TablePlusIcon />
        <TableRefreshIcon />
        <TableRemoveIcon />
        <TableRowHeightIcon />
        <TableRowPlusAfterIcon />
        <TableRowPlusBeforeIcon />
        <TableRowRemoveIcon />
        <TableRowIcon />
        <TableSearchIcon />
        <TableSettingsIcon />
        <TableSplitCellIcon />
        <TableStarIcon />
        <TableSyncIcon />
        <TableTennisIcon />
        <TableIcon />
      </Base>
    </ThemeProvider>
  )
}
