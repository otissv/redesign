import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ChartLineIcon: FC<IconInterface> = function ChartLineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChartLineIcon ${className}`;
      return (
        <Icon alt="ChartLine" className={classNames} {...propsRest}>
          <path d="M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z" />

        </Icon>
      );
    };
    ChartLineIcon.displayName = 'ChartLineIcon';
      