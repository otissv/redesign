import React, { FC, Fragment } from 'react'
import { animate } from 'popmotion'

import { MatchInterface } from './match.types'

export const Match: FC<MatchInterface> = function Match({
  animate: active = '',
  children,
  animations,
  ...propsRest
}) {
  const currentAnimation = React.useRef<string>()

  function reducer(
    state: { [key: string]: string | number },
    action: { type: string; value: string | number }
  ) {
    return {
      ...state,
      [action.type]: action.value,
    }
  }

  const [styles, dispatch] = React.useReducer(reducer, {})

  React.useEffect(() => {
    if (!animations || currentAnimation.current === active) {
      return
    }

    for (let key of Object.keys(animations[active] || {})) {
      const prop = animations[active][key]
      ;(animate as any)({
        ...prop,
        onUpdate: (value: string | number) => {
          dispatch({
            type: key,
            value,
          })
        },
      })
    }

    currentAnimation.current = active
  }, [active, animations])

  const childrenArray = React.Children.toArray(children)

  const elements = []

  for (let c of childrenArray) {
    const child: any = c

    const props = {
      ...child.props,
      ...propsRest,
      style: {
        ...child.props.style,
        ...propsRest?.style,
        ...styles,
      },
    }

    const element = React.cloneElement(child, props, child.props.children)
    elements.push(element)
  }

  return <Fragment>{elements}</Fragment>
}

Match.displayName = 'Match'
