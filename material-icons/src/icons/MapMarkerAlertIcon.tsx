import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MapMarkerAlertIcon: FC<IconInterface> = function MapMarkerAlertIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MapMarkerAlertIcon ${className}`;
      return (
        <Icon alt="MapMarkerAlert" className={classNames} {...propsRest}>
          <path d="M12,2C15.86,2 19,5.13 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M11,6V11H13V6H11M11,13V15H13V13H11Z" />

        </Icon>
      );
    };
    MapMarkerAlertIcon.displayName = 'MapMarkerAlertIcon';
      