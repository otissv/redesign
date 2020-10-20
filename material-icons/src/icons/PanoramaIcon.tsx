import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PanoramaIcon: FC<IconInterface> = function PanoramaIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PanoramaIcon ${className}`;
      return (
        <Icon alt="Panorama" className={classNames} {...propsRest}>
          <path d="M8.5,12.5L11,15.5L14.5,11L19,17H5M23,18V6A2,2 0 0,0 21,4H3A2,2 0 0,0 1,6V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18Z" />

        </Icon>
      );
    };
    PanoramaIcon.displayName = 'PanoramaIcon';
      