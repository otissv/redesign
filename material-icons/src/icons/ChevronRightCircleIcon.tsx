import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ChevronRightCircleIcon: FC<IconInterface> = function ChevronRightCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChevronRightCircleIcon ${className}`;
      return (
        <Icon alt="ChevronRightCircle" className={classNames} {...propsRest}>
          <path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,18L16,12L10,6L8.6,7.4L13.2,12L8.6,16.6L10,18Z" />

        </Icon>
      );
    };
    ChevronRightCircleIcon.displayName = 'ChevronRightCircleIcon';
      