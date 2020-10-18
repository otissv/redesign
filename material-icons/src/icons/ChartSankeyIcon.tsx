import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ChartSankeyIcon: FC<IconInterface> = function ChartSankeyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChartSankeyIcon ${className}`;
      return (
        <Icon alt="ChartSankey" className={classNames} {...propsRest}>
          <path d="M22 5H4V2H2V22H22V20H4V9C8.09 9 10.13 11 12.29 13.21S17.09 18 22 18V16C17.91 16 15.87 14 13.71 11.79S8.91 7 4 7H22Z" />

        </Icon>
      );
    };
    ChartSankeyIcon.displayName = 'ChartSankeyIcon';
      