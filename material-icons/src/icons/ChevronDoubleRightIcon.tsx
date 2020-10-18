import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ChevronDoubleRightIcon: FC<IconInterface> = function ChevronDoubleRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChevronDoubleRightIcon ${className}`;
      return (
        <Icon alt="ChevronDoubleRight" className={classNames} {...propsRest}>
          <path d="M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z" />

        </Icon>
      );
    };
    ChevronDoubleRightIcon.displayName = 'ChevronDoubleRightIcon';
      