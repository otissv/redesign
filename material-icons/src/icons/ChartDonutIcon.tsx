import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ChartDonutIcon: FC<IconInterface> = function ChartDonutIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChartDonutIcon ${className}`;
      return (
        <Icon alt="ChartDonut" className={classNames} {...propsRest}>
          <path d="M13,2.05V5.08C16.39,5.57 19,8.47 19,12C19,12.9 18.82,13.75 18.5,14.54L21.12,16.07C21.68,14.83 22,13.45 22,12C22,6.82 18.05,2.55 13,2.05M12,19A7,7 0 0,1 5,12C5,8.47 7.61,5.57 11,5.08V2.05C5.94,2.55 2,6.81 2,12A10,10 0 0,0 12,22C15.3,22 18.23,20.39 20.05,17.91L17.45,16.38C16.17,18 14.21,19 12,19Z" />

        </Icon>
      );
    };
    ChartDonutIcon.displayName = 'ChartDonutIcon';
      