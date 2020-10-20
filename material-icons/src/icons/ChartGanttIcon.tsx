import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ChartGanttIcon: FC<IconInterface> = function ChartGanttIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChartGanttIcon ${className}`;
      return (
        <Icon alt="ChartGantt" className={classNames} {...propsRest}>
          <path d="M2,5H10V2H12V22H10V18H6V15H10V13H4V10H10V8H2V5M14,5H17V8H14V5M14,10H19V13H14V10M14,15H22V18H14V15Z" />

        </Icon>
      );
    };
    ChartGanttIcon.displayName = 'ChartGanttIcon';
      