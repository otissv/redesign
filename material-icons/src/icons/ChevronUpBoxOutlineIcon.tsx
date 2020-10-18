import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ChevronUpBoxOutlineIcon: FC<IconInterface> = function ChevronUpBoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChevronUpBoxOutlineIcon ${className}`;
      return (
        <Icon alt="ChevronUpBoxOutline" className={classNames} {...propsRest}>
          <path d="M19,3H5A2,2 0 0,0 3,5V19C3,20.11 3.9,21 5,21H19C20.11,21 21,20.11 21,19V5A2,2 0 0,0 19,3M19,19H5V5H19V19M16.59,15.71L12,11.12L7.41,15.71L6,14.29L12,8.29L18,14.29L16.59,15.71Z" />

        </Icon>
      );
    };
    ChevronUpBoxOutlineIcon.displayName = 'ChevronUpBoxOutlineIcon';
      