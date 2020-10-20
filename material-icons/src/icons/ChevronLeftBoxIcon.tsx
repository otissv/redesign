import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ChevronLeftBoxIcon: FC<IconInterface> = function ChevronLeftBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChevronLeftBoxIcon ${className}`;
      return (
        <Icon alt="ChevronLeftBox" className={classNames} {...propsRest}>
          <path d="M19,3H5A2,2 0 0,0 3,5V19C3,20.11 3.9,21 5,21H19C20.11,21 21,20.11 21,19V5A2,2 0 0,0 19,3M15.71,16.59L14.29,18L8.29,12L14.29,6L15.71,7.41L11.12,12L15.71,16.59Z" />

        </Icon>
      );
    };
    ChevronLeftBoxIcon.displayName = 'ChevronLeftBoxIcon';
      