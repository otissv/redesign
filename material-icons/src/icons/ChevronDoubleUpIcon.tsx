import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ChevronDoubleUpIcon: FC<IconInterface> = function ChevronDoubleUpIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChevronDoubleUpIcon ${className}`;
      return (
        <Icon alt="ChevronDoubleUp" className={classNames} {...propsRest}>
          <path d="M7.41,18.41L6,17L12,11L18,17L16.59,18.41L12,13.83L7.41,18.41M7.41,12.41L6,11L12,5L18,11L16.59,12.41L12,7.83L7.41,12.41Z" />

        </Icon>
      );
    };
    ChevronDoubleUpIcon.displayName = 'ChevronDoubleUpIcon';
      