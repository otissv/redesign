import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SelectionMarkerIcon: FC<IconInterface> = function SelectionMarkerIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SelectionMarkerIcon ${className}`;
      return (
        <Icon alt="SelectionMarker" className={classNames} {...propsRest}>
          <path d="M2 4C2 2.89 2.9 2 4 2H7V4H4V7H2V4M22 4V7H20V4H17V2H20C21.1 2 22 2.89 22 4M2 20V17H4V20H7V22H4C2.9 22 2 21.11 2 20M10 2H14V4H10V2M10 20H14V22H10V20M2 10H4V14H2V10M18.5 13C20.4 13 22 14.6 22 16.5C22 19.1 18.5 23 18.5 23C18.5 23 15 19.1 15 16.5C15 14.6 16.6 13 18.5 13M18.5 17.8C19.2 17.8 19.8 17.2 19.7 16.6C19.7 16 19.1 15.4 18.5 15.4C17.9 15.4 17.3 15.9 17.3 16.6C17.3 17.2 17.8 17.8 18.5 17.8M20 10H22V12.34C21.42 11.84 20.74 11.45 20 11.23V10Z" />

        </Icon>
      );
    };
    SelectionMarkerIcon.displayName = 'SelectionMarkerIcon';
      