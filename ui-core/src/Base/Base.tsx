import React, { FC, createElement, cloneElement } from 'react'
import { css as emotionCss } from 'emotion'

import {
  BaseInterface,
  ChildrenPropsObjectType,
  ChildrenPropsFunctionType,
} from './base.types'
import { createStyleString } from '../helpers/createStyleString'
import { buildCssUtilities } from '../helpers/buildCssUtilities'
import { ignoreAttributes } from './ignoreAttributes'
import { isFunction } from '@redesign/theme'

function CreateComponent({ tag = 'div', children, ...props }: any) {
  return createElement(
    tag,
    props,
    Array.isArray(children) ? [...children] : children
  )
}

/**
 Base component to build components upon.
 
 ##Installation
 Install the ui-core and its peer dependencies into your project
 `npm install @redesign/theme emotion react`  
 or  
 `yarn add @redesign/theme emotion react`  

 ## Default

 */
export const Base: FC<BaseInterface> = function Base(props) {
  const {
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

  const attributes = Object.entries(propsRest).reduce(
    (acc: any, [key, value]: any) => {
      return ignore.includes(key) || typeof value === 'undefined'
        ? acc
        : {
            ...acc,
            [key]: value,
          }
    },
    {}
  )

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

Base.displayName = 'Base'
