import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowDownBoxIcon: FC<IconInterface> = function ArrowDownBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowDownBoxIcon ${className}`;
      return (
        <Icon alt="ArrowDownBox" className={classNames} {...propsRest}>
          <path d="M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M11,6V14.5L7.5,11L6.08,12.42L12,18.34L17.92,12.42L16.5,11L13,14.5V6H11Z" />

        </Icon>
      );
    };
    ArrowDownBoxIcon.displayName = 'ArrowDownBoxIcon';
      