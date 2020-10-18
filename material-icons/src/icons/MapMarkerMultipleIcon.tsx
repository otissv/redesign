import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MapMarkerMultipleIcon: FC<IconInterface> = function MapMarkerMultipleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MapMarkerMultipleIcon ${className}`;
      return (
        <Icon alt="MapMarkerMultiple" className={classNames} {...propsRest}>
          <path d="M14,11.5A2.5,2.5 0 0,0 16.5,9A2.5,2.5 0 0,0 14,6.5A2.5,2.5 0 0,0 11.5,9A2.5,2.5 0 0,0 14,11.5M14,2C17.86,2 21,5.13 21,9C21,14.25 14,22 14,22C14,22 7,14.25 7,9A7,7 0 0,1 14,2M5,9C5,13.5 10.08,19.66 11,20.81L10,22C10,22 3,14.25 3,9C3,5.83 5.11,3.15 8,2.29C6.16,3.94 5,6.33 5,9Z" />

        </Icon>
      );
    };
    MapMarkerMultipleIcon.displayName = 'MapMarkerMultipleIcon';
      