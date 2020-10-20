import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ChartLineVariantIcon: FC<IconInterface> = function ChartLineVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChartLineVariantIcon ${className}`;
      return (
        <Icon alt="ChartLineVariant" className={classNames} {...propsRest}>
          <path d="M3.5,18.5L9.5,12.5L13.5,16.5L22,6.92L20.59,5.5L13.5,13.5L9.5,9.5L2,17L3.5,18.5Z" />

        </Icon>
      );
    };
    ChartLineVariantIcon.displayName = 'ChartLineVariantIcon';
      