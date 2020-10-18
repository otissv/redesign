import { FC, useLayoutEffect, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { PortalInterface } from './portal.types'

export const Portal: FC<PortalInterface> = function Portal({
  children,
  selector = 'body',
}) {
  const rootRef = useRef<any>(document.getElementById(selector))
  const elementRef = useRef<any>(document.createElement('div'))

  useEffect(() => {
    rootRef.current = document.getElementById(selector)
  }, [])

  useLayoutEffect(() => {
    rootRef.current && rootRef.current.appendChild(elementRef.current)
  }, [rootRef.current, elementRef.current])

  return rootRef.current ? createPortal(children as any, rootRef.current) : null
}
