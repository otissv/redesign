import React from 'react'

export function useOnScreen(
  elementRef: { current: HTMLElement | null },
  dist = 0
) {
  const element = elementRef.current
  const [onScreen, setOnScreen] = React.useState<boolean>()

  React.useEffect(() => {
    function checkVisible(element: HTMLElement, threshold = 0) {
      const rect = element.getBoundingClientRect()
      const viewHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight
      )
      return !Boolean(rect.top - viewHeight + threshold >= 0)
    }

    window.addEventListener(
      'scroll',
      () => element && setOnScreen(checkVisible(element, dist))
    )
  }, [element, dist, setOnScreen])

  return onScreen
}
