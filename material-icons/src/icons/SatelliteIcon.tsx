import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SatelliteIcon: FC<IconInterface> = function SatelliteIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SatelliteIcon ${className}`;
      return (
        <Icon alt="Satellite" className={classNames} {...propsRest}>
          <path d="M5,18L8.5,13.5L11,16.5L14.5,12L19,18M5,12V10A5,5 0 0,0 10,5H12A7,7 0 0,1 5,12M5,5H8A3,3 0 0,1 5,8M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />

        </Icon>
      );
    };
    SatelliteIcon.displayName = 'SatelliteIcon';
      