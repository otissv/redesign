import React from 'react'
import { Base } from './Base'
import { createTheme } from '@redesign/theme'

export default {
  title: 'Core/Base',
  component: Base,
}

const theme: any = createTheme()

const css = (props: any) => ({
  fontFamily: ' sans-serif',
  textAlign: 'center',
  background: props.background || 'green',
  fontSize: props.size,
  color: 'blue',
  '&:hover': {
    background: 'red',
  },
})

export const Default = () => (
  <Base
    className="inner"
    theme={theme}
    css={css}
    w={10}
    h="100px"
    border="thickAccent"
  >
    Base
    <Base className="button" as="button" theme={theme}>
      Button
    </Base>
  </Base>
)

export const Children_CSS_String = () => (
  <Base
    theme={theme}
    childrenCss={`
      width: 30px;
      height: 30px;
      margin: 10px;
      background: red;
    `}
    css="padding: 10px; border: 1px solid red"
  >
    <Base theme={theme}></Base>
    <Base theme={theme}></Base>
    <Base theme={theme}></Base>
  </Base>
)

export const Children_CSS_Object = () => (
  <Base
    theme={theme}
    childrenCss={{
      width: '30px',
      height: '30px',
      margin: '10px',
      background: 'red',
    }}
    css="padding: 10px; border: 1px solid red"
  >
    <Base theme={theme}></Base>
    <Base theme={theme}></Base>
    <Base theme={theme}></Base>
  </Base>
)
export const Children_CSS_Function = () => (
  <Base
    theme={theme}
    childrenCss={({ theme }) => {
      return {
        width: '30px',
        height: '30px',
        margin: '10px',
        background: theme.color.success,
      }
    }}
    css="padding: 10px; border: 1px solid red"
  >
    <Base theme={theme}></Base>
    <Base theme={theme}></Base>
    <Base theme={theme}></Base>
  </Base>
)

export const Children_Props_Object = () => (
  <Base
    theme={theme}
    childrenProps={{
      className: 'my-class',
      css: {
        width: '100px',
        height: '100px',
        margin: '10px',
        border: '1px solid blue',
      },
    }}
    css="padding: 10px; background red"
  >
    <Base theme={theme}></Base>
    <Base theme={theme}></Base>
    <Base theme={theme}></Base>
  </Base>
)

export const Children_Props_Function = () => (
  <Base
    theme={theme}
    childrenProps={({ theme }) => {
      return {
        className: 'my-class',
        css: {
          width: '30px',
          height: '30px',
          margin: '10px',
          border: theme?.border?.thin,
        },
      }
    }}
    css="padding: 10px; border: 1px solid red"
  >
    <Base theme={theme}></Base>
    <Base theme={theme}></Base>
    <Base theme={theme}></Base>
  </Base>
)
