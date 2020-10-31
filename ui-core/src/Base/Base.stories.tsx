import React from 'react'
import { Base } from './Base'
import { createTheme } from '@redesign-system/theme'
import { ThemeProvider } from '../ThemeContext'

export default {
  title: 'Core/Base',
  component: Base,
}

const theme: any = createTheme()

export const Default = () => (
  <ThemeProvider>
    <Base w="100px" h="100px" theme={theme} color="white">
      Base
    </Base>
  </ThemeProvider>
)

export const Animate = () => {
  const [animate, setAnimate] = React.useState('')

  const animations = {
    fadeIn: {
      opacity: {
        from: 0.2,
        to: 1,
        duration: 2000,
      },
    },
    moveLeft: {
      transform: {
        from: 'translateX(300px)',
        to: 'translateX(0px)',
        bounce: 1,
      },
    },
    moveRight: {
      transform: {
        from: 'translateX(0px)',
        to: 'translateX(300px)',
        bounce: 1,
      },
    },
  }
  return (
    <ThemeProvider>
      <Base
        animate={animate}
        animations={animations}
        onClick={() =>
          setAnimate(animate !== 'moveRight' ? 'moveRight' : 'moveLeft')
        }
        w="100px"
        h="100px"
        theme={theme}
        color="white"
        bg="grey"
      >
        Click Me
      </Base>
    </ThemeProvider>
  )
}

export const Children_CSS_String = () => (
  <ThemeProvider>
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
  </ThemeProvider>
)

export const Children_CSS_Object = () => (
  <ThemeProvider>
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
  </ThemeProvider>
)
export const Children_CSS_Function = () => (
  <ThemeProvider>
    <Base
      theme={theme}
      childrenCss={({ theme }: any) => {
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
  </ThemeProvider>
)

export const Children_Props_Object = () => (
  <ThemeProvider>
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
    >
      <Base theme={theme}></Base>
      <Base theme={theme}></Base>
      <Base theme={theme}></Base>
    </Base>
  </ThemeProvider>
)

export const Children_Props_Function = () => (
  <ThemeProvider>
    <Base
      theme={theme}
      childrenProps={({ theme }: any) => {
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
  </ThemeProvider>
)
