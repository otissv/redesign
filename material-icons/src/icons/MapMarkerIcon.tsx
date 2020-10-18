import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MapMarkerIcon: FC<IconInterface> = function MapMarkerIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MapMarkerIcon ${className}`;
      return (
        <Icon alt="MapMarker" className={classNames} {...propsRest}>
          <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />

        </Icon>
      );
    };
    MapMarkerIcon.displayName = 'MapMarkerIcon';
      