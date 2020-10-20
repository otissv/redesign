import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowUpBoxIcon: FC<IconInterface> = function ArrowUpBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowUpBoxIcon ${className}`;
      return (
        <Icon alt="ArrowUpBox" className={classNames} {...propsRest}>
          <path d="M21,19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19C20.11,3 21,3.9 21,5V19M13,18V9.5L16.5,13L17.92,11.58L12,5.66L6.08,11.58L7.5,13L11,9.5V18H13Z" />

        </Icon>
      );
    };
    ArrowUpBoxIcon.displayName = 'ArrowUpBoxIcon';
      