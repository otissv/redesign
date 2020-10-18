import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ChevronRightCircleOutlineIcon: FC<IconInterface> = function ChevronRightCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChevronRightCircleOutlineIcon ${className}`;
      return (
        <Icon alt="ChevronRightCircleOutline" className={classNames} {...propsRest}>
          <path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M8.6,16.6L13.2,12L8.6,7.4L10,6L16,12L10,18L8.6,16.6Z" />

        </Icon>
      );
    };
    ChevronRightCircleOutlineIcon.displayName = 'ChevronRightCircleOutlineIcon';
      