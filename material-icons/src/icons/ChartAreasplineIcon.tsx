import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ChartAreasplineIcon: FC<IconInterface> = function ChartAreasplineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChartAreasplineIcon ${className}`;
      return (
        <Icon alt="ChartAreaspline" className={classNames} {...propsRest}>
          <path d="M17.45,15.18L22,7.31V19L22,21H2V3H4V15.54L9.5,6L16,9.78L20.24,2.45L21.97,3.45L16.74,12.5L10.23,8.75L4.31,19H6.57L10.96,11.44L17.45,15.18Z" />

        </Icon>
      );
    };
    ChartAreasplineIcon.displayName = 'ChartAreasplineIcon';
      