import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ChevronDoubleLeftIcon: FC<IconInterface> = function ChevronDoubleLeftIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChevronDoubleLeftIcon ${className}`;
      return (
        <Icon alt="ChevronDoubleLeft" className={classNames} {...propsRest}>
          <path d="M18.41,7.41L17,6L11,12L17,18L18.41,16.59L13.83,12L18.41,7.41M12.41,7.41L11,6L5,12L11,18L12.41,16.59L7.83,12L12.41,7.41Z" />

        </Icon>
      );
    };
    ChevronDoubleLeftIcon.displayName = 'ChevronDoubleLeftIcon';
      