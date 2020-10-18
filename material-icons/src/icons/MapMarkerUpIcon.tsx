import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MapMarkerUpIcon: FC<IconInterface> = function MapMarkerUpIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MapMarkerUpIcon ${className}`;
      return (
        <Icon alt="MapMarkerUp" className={classNames} {...propsRest}>
          <path d="M12 2A7 7 0 0 0 5 9C5 14.25 12 22 12 22S19 14.25 19 9A7 7 0 0 0 12 2M16.5 9H14V14H10V9H7.5L12 4.5Z" />

        </Icon>
      );
    };
    MapMarkerUpIcon.displayName = 'MapMarkerUpIcon';
      