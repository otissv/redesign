import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ChartMultipleIcon: FC<IconInterface> = function ChartMultipleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChartMultipleIcon ${className}`;
      return (
        <Icon alt="ChartMultiple" className={classNames} {...propsRest}>
          <path d="M22 16V18H6V2H8V13.57L13.71 4.57L16.87 6.68L19.29 4.26L20.71 5.68L17.13 9.29L14.29 7.4L8.82 16M4 20V4H2V22H22V20Z" />

        </Icon>
      );
    };
    ChartMultipleIcon.displayName = 'ChartMultipleIcon';
      