import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const HomeFloorGIcon: FC<IconInterface> = function HomeFloorGIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HomeFloorGIcon ${className}`;
      return (
        <Icon alt="HomeFloorG" className={classNames} {...propsRest}>
          <path d="M12,3L2,12H5V20H19V12H22L12,3M11,8H15V10H11V16H13V12H15V16C15,17.11 14.1,18 13,18H11A2,2 0 0,1 9,16V10C9,8.89 9.9,8 11,8Z" />

        </Icon>
      );
    };
    HomeFloorGIcon.displayName = 'HomeFloorGIcon';
      