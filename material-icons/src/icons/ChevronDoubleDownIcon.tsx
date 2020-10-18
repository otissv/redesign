import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ChevronDoubleDownIcon: FC<IconInterface> = function ChevronDoubleDownIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChevronDoubleDownIcon ${className}`;
      return (
        <Icon alt="ChevronDoubleDown" className={classNames} {...propsRest}>
          <path d="M16.59,5.59L18,7L12,13L6,7L7.41,5.59L12,10.17L16.59,5.59M16.59,11.59L18,13L12,19L6,13L7.41,11.59L12,16.17L16.59,11.59Z" />

        </Icon>
      );
    };
    ChevronDoubleDownIcon.displayName = 'ChevronDoubleDownIcon';
      