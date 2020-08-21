import React, {
  FC,
  createContext,
  cloneElement,
  useMemo,
  useContext,
} from 'react'
import { ButtonGroupProviderInterface } from './buttonGroup.types'

export const ButtonGroupContext = createContext({})

export function useButtonGroup() {
  return useContext(ButtonGroupContext)
}

export const ButtonGroupProvider: FC<ButtonGroupProviderInterface> = function ButtonGroupContextProvider({
  appearance,
  children,
  size,
  stretch,
  match,
  ...propsRest
}) {
  const value = useMemo(() => ({ appearance, size, stretch }), [
    appearance,
    size,
    stretch,
  ])

  const childElements = useMemo(
    () =>
      Boolean(Object.keys(propsRest).length)
        ? React.Children.map(children, (child: any) =>
            cloneElement(
              child,
              { ...child.props, ...propsRest },
              child.props.children
            )
          )
        : children,
    [propsRest, children]
  )

  return (
    <ButtonGroupContext.Provider value={value}>
      {childElements}
    </ButtonGroupContext.Provider>
  )
}

ButtonGroupProvider.displayName = 'ButtonGroupProvider'
