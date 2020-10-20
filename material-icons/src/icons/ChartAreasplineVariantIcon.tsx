import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ChartAreasplineVariantIcon: FC<IconInterface> = function ChartAreasplineVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChartAreasplineVariantIcon ${className}`;
      return (
        <Icon alt="ChartAreasplineVariant" className={classNames} {...propsRest}>
          <path d="M22,21H2V3H4V15.54L9.5,6L16,9.78L20.24,2.45L21.97,3.45L22,21Z" />

        </Icon>
      );
    };
    ChartAreasplineVariantIcon.displayName = 'ChartAreasplineVariantIcon';
      