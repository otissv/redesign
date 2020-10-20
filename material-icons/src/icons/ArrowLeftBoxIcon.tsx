import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowLeftBoxIcon: FC<IconInterface> = function ArrowLeftBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowLeftBoxIcon ${className}`;
      return (
        <Icon alt="ArrowLeftBox" className={classNames} {...propsRest}>
          <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5C3,3.89 3.9,3 5,3H19M18,11H9.5L13,7.5L11.58,6.08L5.66,12L11.58,17.92L13,16.5L9.5,13H18V11Z" />

        </Icon>
      );
    };
    ArrowLeftBoxIcon.displayName = 'ArrowLeftBoxIcon';
      