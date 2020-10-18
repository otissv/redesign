import React from 'react'
import { createTheme } from '@redesign/theme'

import { Base } from '../../Base'

export const theme: any = createTheme()

export function Box(props: any) {
  console.log(theme)
  return <Base theme={theme} {...props}></Base>
}

export function Td({ css, ...props }: any) {
  const cssStyles = {
    borderTop: `1px solid #ececec`,
    padding: '20px 10px 10px 10px',
    verticalAlign: 'top',
    ...css,
  }
  return <Base as="td" theme={theme} css={cssStyles} {...props}></Base>
}

export function Th({ css, ...props }: any) {
  const cssStyles = {
    textAlign: 'left',
    paddingLeft: '10px',
    ...css,
  }
  return <Base as="th" theme={theme} css={cssStyles} {...props}></Base>
}

export function Swatch({ css, ...props }: any) {
  const cssStyles = {
    ...css,
    display: 'table-cell',
    verticalAlign: 'bottom',
    width: '100px',
    height: '100px',

    padding: '5px',
  }

  return <Box css={cssStyles} {...props} />
}
