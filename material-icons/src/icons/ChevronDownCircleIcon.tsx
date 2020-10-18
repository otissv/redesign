import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ChevronDownCircleIcon: FC<IconInterface> = function ChevronDownCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChevronDownCircleIcon ${className}`;
      return (
        <Icon alt="ChevronDownCircle" className={classNames} {...propsRest}>
          <path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M6,10L12,16L18,10L16.6,8.6L12,13.2L7.4,8.6L6,10Z" />

        </Icon>
      );
    };
    ChevronDownCircleIcon.displayName = 'ChevronDownCircleIcon';
      