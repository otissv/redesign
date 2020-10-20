import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const Numeric4BoxOutlineIcon: FC<IconInterface> = function Numeric4BoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric4BoxOutlineIcon ${className}`;
      return (
        <Icon alt="Numeric4BoxOutline" className={classNames} {...propsRest}>
          <path d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13,17H15V7H13V11H11V7H9V13H13" />

        </Icon>
      );
    };
    Numeric4BoxOutlineIcon.displayName = 'Numeric4BoxOutlineIcon';
      