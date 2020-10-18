import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ChevronLeftIcon: FC<IconInterface> = function ChevronLeftIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChevronLeftIcon ${className}`;
      return (
        <Icon alt="ChevronLeft" className={classNames} {...propsRest}>
          <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />

        </Icon>
      );
    };
    ChevronLeftIcon.displayName = 'ChevronLeftIcon';
      