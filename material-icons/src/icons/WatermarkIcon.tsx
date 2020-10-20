import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const WatermarkIcon: FC<IconInterface> = function WatermarkIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `WatermarkIcon ${className}`;
      return (
        <Icon alt="Watermark" className={classNames} {...propsRest}>
          <path d="M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H12V13H21V19Z" />

        </Icon>
      );
    };
    WatermarkIcon.displayName = 'WatermarkIcon';
      