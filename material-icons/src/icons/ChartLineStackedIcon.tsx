import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ChartLineStackedIcon: FC<IconInterface> = function ChartLineStackedIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChartLineStackedIcon ${className}`;
      return (
        <Icon alt="ChartLineStacked" className={classNames} {...propsRest}>
          <path d="M17.45,15.18L22,6.81V19L22,21H2V3H4V15.54L4,19H4.31L6,19H6.57L10.96,11.44L17.45,15.18M22,3L21.97,3.45L17,11L10,6L6,12V3H22Z" />

        </Icon>
      );
    };
    ChartLineStackedIcon.displayName = 'ChartLineStackedIcon';
      