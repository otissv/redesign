import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const Numeric0BoxOutlineIcon: FC<IconInterface> = function Numeric0BoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric0BoxOutlineIcon ${className}`;
      return (
        <Icon alt="Numeric0BoxOutline" className={classNames} {...propsRest}>
          <path d="M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M11,7H13A2,2 0 0,1 15,9V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M11,9V15H13V9H11Z" />

        </Icon>
      );
    };
    Numeric0BoxOutlineIcon.displayName = 'Numeric0BoxOutlineIcon';
      