import { AppBarInterface } from '../AppBar';

export interface SelectToolbarInterface {
  selected: number;
  handleDeleteSelected: (e: any) => void;
}

export interface ToolbarInterface extends AppBarInterface {}
