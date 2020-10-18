import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MapMarkerOutlineIcon: FC<IconInterface> = function MapMarkerOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MapMarkerOutlineIcon ${className}`;
      return (
        <Icon alt="MapMarkerOutline" className={classNames} {...propsRest}>
          <path d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z" />

        </Icon>
      );
    };
    MapMarkerOutlineIcon.displayName = 'MapMarkerOutlineIcon';
      