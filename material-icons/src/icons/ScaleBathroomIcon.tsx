import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ScaleBathroomIcon: FC<IconInterface> = function ScaleBathroomIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ScaleBathroomIcon ${className}`;
      return (
        <Icon alt="ScaleBathroom" className={classNames} {...propsRest}>
          <path d="M5,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2M12,4A4,4 0 0,0 8,8H11.26L10.85,5.23L12.9,8H16A4,4 0 0,0 12,4M5,10V20H19V10H5Z" />

        </Icon>
      );
    };
    ScaleBathroomIcon.displayName = 'ScaleBathroomIcon';
      