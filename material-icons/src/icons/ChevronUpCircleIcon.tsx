import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ChevronUpCircleIcon: FC<IconInterface> = function ChevronUpCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChevronUpCircleIcon ${className}`;
      return (
        <Icon alt="ChevronUpCircle" className={classNames} {...propsRest}>
          <path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M7.4,15.4L12,10.8L16.6,15.4L18,14L12,8L6,14L7.4,15.4Z" />

        </Icon>
      );
    };
    ChevronUpCircleIcon.displayName = 'ChevronUpCircleIcon';
      