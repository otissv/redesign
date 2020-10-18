import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ChartHistogramIcon: FC<IconInterface> = function ChartHistogramIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChartHistogramIcon ${className}`;
      return (
        <Icon alt="ChartHistogram" className={classNames} {...propsRest}>
          <path d="M3,3H5V13H9V7H13V11H17V15H21V21H3V3Z" />

        </Icon>
      );
    };
    ChartHistogramIcon.displayName = 'ChartHistogramIcon';
      