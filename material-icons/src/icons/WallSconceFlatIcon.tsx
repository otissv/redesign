import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const WallSconceFlatIcon: FC<IconInterface> = function WallSconceFlatIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `WallSconceFlatIcon ${className}`;
      return (
        <Icon alt="WallSconceFlat" className={classNames} {...propsRest}>
          <path d="M5,5V11H19V5H5M5.27,13.32L3.5,15.09L4.91,16.5L6.68,14.73L5.27,13.32M18.73,13.32L17.32,14.73L19.09,16.5L20.5,15.09L18.73,13.32M11,16V19H13V16H11Z" />

        </Icon>
      );
    };
    WallSconceFlatIcon.displayName = 'WallSconceFlatIcon';
      