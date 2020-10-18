import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const Numeric9BoxOutlineIcon: FC<IconInterface> = function Numeric9BoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric9BoxOutlineIcon ${className}`;
      return (
        <Icon alt="Numeric9BoxOutline" className={classNames} {...propsRest}>
          <path d="M13,11H11V9H13M13,7H11A2,2 0 0,0 9,9V11C9,12.11 9.9,13 11,13H13V15H9V17H13A2,2 0 0,0 15,15V9C15,7.89 14.1,7 13,7M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" />

        </Icon>
      );
    };
    Numeric9BoxOutlineIcon.displayName = 'Numeric9BoxOutlineIcon';
      