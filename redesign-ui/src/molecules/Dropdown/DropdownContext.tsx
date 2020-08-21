import { createContext, useContext } from 'react'
import { DropdownInitialState } from './dropdown.types'

export const DropdownContext = createContext(DropdownInitialState)

export function useDropdown() {
  return useContext(DropdownContext)
}
