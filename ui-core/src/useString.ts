import React from 'react'

export function useString(initialState: string = '') {
  const [string, setString] = React.useState(initialState)

  function onClick(e: any) {
    e.preventDefault()
    const id = e.currentTarget.id
    setString(id)
  }

  function onChange(e: any) {
    const value = e.target.value
    setString(value)
  }

  return {
    string,
    onClick,
    onChange,
  }
}
