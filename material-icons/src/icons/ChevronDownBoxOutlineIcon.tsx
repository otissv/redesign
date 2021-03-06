import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ChevronDownBoxOutlineIcon: FC<IconInterface> = function ChevronDownBoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChevronDownBoxOutlineIcon ${className}`;
      return (
        <Icon alt="ChevronDownBoxOutline" className={classNames} {...propsRest}>
          <path d="M19,3H5A2,2 0 0,0 3,5V19C3,20.11 3.9,21 5,21H19C20.11,21 21,20.11 21,19V5A2,2 0 0,0 19,3M19,19H5V5H19V19M7.41,8.29L12,12.88L16.59,8.29L18,9.71L12,15.71L6,9.71L7.41,8.29Z" />

        </Icon>
      );
    };
    ChevronDownBoxOutlineIcon.displayName = 'ChevronDownBoxOutlineIcon';
      