import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const HomeFloorBIcon: FC<IconInterface> = function HomeFloorBIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HomeFloorBIcon ${className}`;
      return (
        <Icon alt="HomeFloorB" className={classNames} {...propsRest}>
          <path d="M12,3L2,12H5V20H19V12H22L12,3M9,8H13A2,2 0 0,1 15,10V11.5A1.5,1.5 0 0,1 13.5,13A1.5,1.5 0 0,1 15,14.5V16A2,2 0 0,1 13,18H9V8M11,10V12H13V10H11M11,14V16H13V14H11Z" />

        </Icon>
      );
    };
    HomeFloorBIcon.displayName = 'HomeFloorBIcon';
      