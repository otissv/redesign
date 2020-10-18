import React from 'react'

export function useViewport({ mediaQueries }: any) {
  const [[size, breakpoint], setBreakpoint] = React.useState([0, 0])
  const [[width, height], setViewport] = React.useState([0, 0])

  React.useLayoutEffect(() => {
    //TODO: add debounce
    function updateSize() {
      setViewport([window.innerWidth, window.innerHeight])

      const queries: any = Object.entries(mediaQueries).sort(
        (a: any, b: any) => a[1] - b[1]
      )

      const query =
        queries.find((q: any) => window.innerWidth <= q[1]) ||
        queries[queries.length - 1]

      setBreakpoint(query)
    }

    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return { width, height, size, breakpoint }
}
