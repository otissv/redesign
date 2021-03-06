import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ChartTimelineIcon: FC<IconInterface> = function ChartTimelineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChartTimelineIcon ${className}`;
      return (
        <Icon alt="ChartTimeline" className={classNames} {...propsRest}>
          <path d="M2,2H4V20H22V22H2V2M7,10H17V13H7V10M11,15H21V18H11V15M6,4H22V8H20V6H8V8H6V4Z" />

        </Icon>
      );
    };
    ChartTimelineIcon.displayName = 'ChartTimelineIcon';
      