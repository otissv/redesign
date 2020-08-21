import { DropdownInterface, DropdownContentInterface } from './dropdown.types';

export function dropdownTheme({}: DropdownInterface) {
  return {
    position: 'relative',
    display: ' inline-block',
  };
}

export function dropdownButtonTheme({}: DropdownInterface) {
  return {
    display: 'block',
  };
}

export function dropdownContentTheme({
  opened,
  height,
  theme: { transition },
}: DropdownContentInterface) {
  return {
    position: 'absolute',
    zIndex: 8,
    display: 'inline-block',
    height: opened ? height : '0px',
    overflow: 'hidden',
    transition: transition.easeMedium,
  };
}
