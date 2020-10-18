import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ChevronRightIcon: FC<IconInterface> = function ChevronRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChevronRightIcon ${className}`;
      return (
        <Icon alt="ChevronRight" className={classNames} {...propsRest}>
          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />

        </Icon>
      );
    };
    ChevronRightIcon.displayName = 'ChevronRightIcon';
      