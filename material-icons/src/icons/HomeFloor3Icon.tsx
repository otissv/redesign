import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const HomeFloor3Icon: FC<IconInterface> = function HomeFloor3Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `HomeFloor3Icon ${className}`;
      return (
        <Icon alt="HomeFloor3" className={classNames} {...propsRest}>
          <path d="M12,3L22,12H19V20H5V12H2L12,3M15,11.5V10C15,8.89 14.1,8 13,8H9V10H13V12H11V14H13V16H9V18H13A2,2 0 0,0 15,16V14.5A1.5,1.5 0 0,0 13.5,13A1.5,1.5 0 0,0 15,11.5Z" />

        </Icon>
      );
    };
    HomeFloor3Icon.displayName = 'HomeFloor3Icon';
      