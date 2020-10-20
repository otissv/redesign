import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ChevronRightBoxIcon: FC<IconInterface> = function ChevronRightBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChevronRightBoxIcon ${className}`;
      return (
        <Icon alt="ChevronRightBox" className={classNames} {...propsRest}>
          <path d="M19,3H5A2,2 0 0,0 3,5V19C3,20.11 3.9,21 5,21H19C20.11,21 21,20.11 21,19V5A2,2 0 0,0 19,3M9.71,18L8.29,16.59L12.88,12L8.29,7.41L9.71,6L15.71,12L9.71,18Z" />

        </Icon>
      );
    };
    ChevronRightBoxIcon.displayName = 'ChevronRightBoxIcon';
      