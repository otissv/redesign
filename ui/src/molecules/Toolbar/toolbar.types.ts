import { AppBarInterface } from '../../molecules/AppBar'

export interface SelectToolbarInterface {
  selected: number
  handleDeleteSelected: (e: any) => void
}

export interface ToolbarInterface extends AppBarInterface {}
