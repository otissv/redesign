import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const Numeric8BoxOutlineIcon: FC<IconInterface> = function Numeric8BoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric8BoxOutlineIcon ${className}`;
      return (
        <Icon alt="Numeric8BoxOutline" className={classNames} {...propsRest}>
          <path d="M11,13H13V15H11M11,9H13V11H11M11,17H13A2,2 0 0,0 15,15V13.5A1.5,1.5 0 0,0 13.5,12A1.5,1.5 0 0,0 15,10.5V9C15,7.89 14.1,7 13,7H11A2,2 0 0,0 9,9V10.5A1.5,1.5 0 0,0 10.5,12A1.5,1.5 0 0,0 9,13.5V15C9,16.11 9.9,17 11,17M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" />

        </Icon>
      );
    };
    Numeric8BoxOutlineIcon.displayName = 'Numeric8BoxOutlineIcon';
      