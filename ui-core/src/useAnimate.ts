import React from 'react'

import { animate } from 'popmotion'

interface AnimateInterface {
  to: number | number[] | string | string[]

  bounce?: number
  damping?: number
  driver?: any
  duration?: number
  ease?: any | any[]
  elapsed?: number
  from?: number | string
  mass?: number
  offset?: number[]
  repeat?: number
  repeatDelay?: number
  repeatType?: string
  restDelta?: number
  restSpeed?: number
  stiffness?: number
  type?: string
  velocity?: number
  onUpdate?: (value: any) => void
  onPlay?: () => void
  onComplete?: () => void
  onRepeat?: () => void
  onStop?: () => void
}

export function useAnimate({
  to,
  from,
  repeat,
  repeatDelay,
  repeatType,
  driver,
  type,
  ease,
  duration,
  offset,
  stiffness,
  damping,
  mass,
  velocity,
  bounce,
  restDelta,
  restSpeed,
  onUpdate,
  onPlay,
  onComplete,
  onRepeat,
  onStop,
}: AnimateInterface) {
  const [state, setState] = React.useState(from)
  const animation = React.useRef<any>()

  React.useEffect(() => {
    animation.current = animate({
      from,
      to,
      repeat,
      repeatDelay,
      repeatType: repeatType as any,
      driver,
      type: type as any,
      onPlay,
      onComplete,
      onRepeat,
      onStop,
      ease,
      duration,
      offset,
      stiffness,
      damping,
      mass,
      velocity,
      bounce,
      restDelta,
      restSpeed,
      onUpdate: (value: string | number) => {
        setState(value)
        onUpdate && onUpdate(value)
      },
    })
  }, [
    from,
    to,
    repeat,
    repeatDelay,
    repeatType,
    driver,
    type,
    onUpdate,
    onPlay,
    onComplete,
    onRepeat,
    onStop,
    ease,
    duration,
    offset,
    stiffness,
    damping,
    mass,
    velocity,
    bounce,
    restDelta,
    restSpeed,
  ])

  return [state, animation]
}
