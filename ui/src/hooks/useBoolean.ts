import React from 'react'

export function useBoolean(initialState: boolean = false) {
  const [boolean, setBoolean] = React.useState(initialState)

  function onClick(e: any) {
    e.preventDefault && e.preventDefault()
    return (boolean: boolean) => setBoolean(boolean)
  }

  function onToggleClick(e: any) {
    e.preventDefault && e.preventDefault()
    setBoolean(!boolean)
  }

  function onChange(e: any) {
    const value = e.target.value
    setBoolean(value)
  }

  return {
    boolean,
    onClick,
    onToggleClick,
    setBoolean,
    onChange,
  }
}
