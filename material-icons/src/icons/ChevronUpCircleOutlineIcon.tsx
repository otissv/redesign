import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ChevronUpCircleOutlineIcon: FC<IconInterface> = function ChevronUpCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChevronUpCircleOutlineIcon ${className}`;
      return (
        <Icon alt="ChevronUpCircleOutline" className={classNames} {...propsRest}>
          <path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M7.4,15.4L12,10.8L16.6,15.4L18,14L12,8L6,14L7.4,15.4Z" />

        </Icon>
      );
    };
    ChevronUpCircleOutlineIcon.displayName = 'ChevronUpCircleOutlineIcon';
      