import React from 'react'
import { Base } from '../Base'
import { createTheme } from '@redesign-system/theme'
import { Match } from './Match'

export default {
  title: 'Core/Match',
  component: Match,
}

const theme: any = createTheme()

export const Default = () => (
  <Match theme={theme} h="100px" w="100px" m={4} p={4} color="white" bg="grey">
    <Base>Box</Base>
    <Base>Box</Base>
    <Base>Box</Base>
  </Match>
)

export const Animate = () => {
  const [animate, setAnimate] = React.useState('fadeIn')

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
      },
    },
  }

  return (
    <Match
      animate={animate}
      animations={animations}
      theme={theme}
      h="100px"
      w="100px"
      m={4}
      p={4}
      opacity="0.2"
      color="white"
      bg="grey"
    >
      <Base
        onClick={() =>
          setAnimate(animate !== 'moveRight' ? 'moveRight' : 'moveLeft')
        }
      >
        Click Me
      </Base>
      <Base
        onClick={() =>
          setAnimate(animate !== 'moveRight' ? 'moveRight' : 'moveLeft')
        }
      >
        Click Me
      </Base>
      <Base
        onClick={() =>
          setAnimate(animate !== 'moveRight' ? 'moveRight' : 'moveLeft')
        }
      >
        Click Me
      </Base>
    </Match>
  )
}
