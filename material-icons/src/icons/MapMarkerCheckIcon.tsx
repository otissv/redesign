import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MapMarkerCheckIcon: FC<IconInterface> = function MapMarkerCheckIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MapMarkerCheckIcon ${className}`;
      return (
        <Icon alt="MapMarkerCheck" className={classNames} {...propsRest}>
          <path d="M12,2C15.86,2 19,5.14 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9C5,5.14 8.14,2 12,2M10.47,14L17,7.41L15.6,6L10.47,11.18L8.4,9.09L7,10.5L10.47,14Z" />

        </Icon>
      );
    };
    MapMarkerCheckIcon.displayName = 'MapMarkerCheckIcon';
      