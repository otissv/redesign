import React, { FC, createElement, cloneElement } from 'react'
import { css as emotionCss } from 'emotion'
import { animate } from 'popmotion'

import {
  BaseInterface,
  ChildrenPropsObjectType,
  ChildrenPropsFunctionType,
} from './base.types'
import { createStyleString } from '../helpers/createStyleString'
import { buildCssUtilities } from '../helpers/buildCssUtilities'
import { ignoreAttributes } from './ignoreAttributes'
import { isFunction } from '@redesign-system/theme'

function CreateComponent({ tag = 'div', children, ...props }: any) {
  return createElement(
    tag,
    props,
    Array.isArray(children) ? [...children] : children
  )
}

function useAnimation({ animate: active = '', animations }: any) {
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

  return styles
}

export const BaseComponent: FC<BaseInterface> = function Base(props) {
  const {
    animate: active = '',
    animations,
    as: tag,
    children,
    childrenCss,
    childrenProps,
    className = '',
    css = '',
    theme,
    __ignore = [],
    ...propsRest
  } = props

  // merge styles into string
  const _styles = [
    ...(css ? [createStyleString(css, props)] : []),
    createStyleString(buildCssUtilities(props as any)),
  ]
    .filter(s => s.trim() !== '')
    .join(';')
  const classNameStyles: string = emotionCss`${_styles}`

  const classNames = `Base ${classNameStyles} ${className}`

  // attributes
  const ignore = [
    ...ignoreAttributes,
    ...(Array.isArray(__ignore) ? __ignore : [__ignore]),
  ]

  const animationStyles = useAnimation({
    animate: active,
    animations,
  })

  let attributes: { [key: string]: any } = {}

  for (let key in propsRest) {
    if (key === 'style') {
      attributes.style = {
        ...animationStyles,
        ...propsRest.style,
      }
    } else if (!ignore.includes(key)) {
      attributes[key] = propsRest[key]
    }
  }

  // clone children props and css
  const clonedChildren =
    childrenProps || childrenCss
      ? React.Children.map(children, (child: any) => {
          if (!child) return null

          const childProps: { [key: string]: any } | undefined = isFunction(
            childrenProps
          )
            ? childrenProps &&
              (childrenProps as ChildrenPropsFunctionType)(props)
            : childrenProps

          return child.props
            ? cloneElement(
                child,
                {
                  ...child.props,
                  ...(childProps || {}),
                  style: {
                    ...child.props?.style,
                    ...(childProps?.style || {}),
                  },
                  css: [
                    child.props.css || '',
                    childProps?.css || '',
                    childrenCss || '',
                  ],
                  className: `${child.props?.className ||
                    ''} ${(childrenProps as ChildrenPropsObjectType)
                    ?.className || ''}`,
                },
                child.props.children
              )
            : child
        })
      : children

  return (
    <CreateComponent
      className={classNames}
      tag={tag}
      children={clonedChildren}
      {...attributes}
    />
  )
}

export const Base = React.forwardRef<HTMLButtonElement, BaseInterface>(
  (props, ref) => {
    const { theme, ...propsRest } = props
    return <BaseComponent theme={theme} ref={ref} {...propsRest} />
  }
)

BaseComponent.displayName = 'Base'
