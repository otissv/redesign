import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const Numeric2BoxOutlineIcon: FC<IconInterface> = function Numeric2BoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric2BoxOutlineIcon ${className}`;
      return (
        <Icon alt="Numeric2BoxOutline" className={classNames} {...propsRest}>
          <path d="M15,15H11V13H13A2,2 0 0,0 15,11V9C15,7.89 14.1,7 13,7H9V9H13V11H11A2,2 0 0,0 9,13V17H15M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" />

        </Icon>
      );
    };
    Numeric2BoxOutlineIcon.displayName = 'Numeric2BoxOutlineIcon';
      