import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ChevronLeftCircleOutlineIcon: FC<IconInterface> = function ChevronLeftCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChevronLeftCircleOutlineIcon ${className}`;
      return (
        <Icon alt="ChevronLeftCircleOutline" className={classNames} {...propsRest}>
          <path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M15.4,16.6L10.8,12L15.4,7.4L14,6L8,12L14,18L15.4,16.6Z" />

        </Icon>
      );
    };
    ChevronLeftCircleOutlineIcon.displayName = 'ChevronLeftCircleOutlineIcon';
      