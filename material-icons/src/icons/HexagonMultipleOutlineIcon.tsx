import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const HexagonMultipleOutlineIcon: FC<IconInterface> = function HexagonMultipleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HexagonMultipleOutlineIcon ${className}`;
      return (
        <Icon alt="HexagonMultipleOutline" className={classNames} {...propsRest}>
          <path d="M9.37 4L10.78 6.5L9.37 9H6.63L5.23 6.5L6.63 4H9.37M10.25 2H5.75C5.56 2 5.39 2.11 5.31 2.26L3.09 6.22L3 6.5L3.09 6.78L5.31 10.74C5.39 10.89 5.56 11 5.75 11H10.25C10.44 11 10.61 10.89 10.69 10.74L12.91 6.78L13 6.5L12.91 6.22L10.69 2.26C10.61 2.11 10.44 2 10.25 2M18.62 9.5L20 12L18.62 14.5H15.88L14.5 12L15.88 9.5H18.62M19.5 7.5H15C14.81 7.5 14.64 7.61 14.56 7.76L12.34 11.72L12.25 12L12.34 12.28L14.56 16.24C14.64 16.39 14.81 16.5 15 16.5H19.5C19.69 16.5 19.86 16.39 19.94 16.24L22.16 12.28L22.25 12L22.16 11.72L19.94 7.76C19.86 7.61 19.69 7.5 19.5 7.5M9.37 15L10.78 17.5L9.37 20H6.63L5.23 17.5L6.63 15H9.37M10.25 13H5.75C5.56 13 5.39 13.11 5.31 13.26L3.09 17.22L3 17.5L3.09 17.78L5.31 21.74C5.39 21.89 5.56 22 5.75 22H10.25C10.44 22 10.61 21.89 10.69 21.74L12.91 17.78L13 17.5L12.91 17.22L10.69 13.26C10.61 13.11 10.44 13 10.25 13Z" />

        </Icon>
      );
    };
    HexagonMultipleOutlineIcon.displayName = 'HexagonMultipleOutlineIcon';
      