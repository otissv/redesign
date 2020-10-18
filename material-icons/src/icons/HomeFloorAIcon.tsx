import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const HomeFloorAIcon: FC<IconInterface> = function HomeFloorAIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HomeFloorAIcon ${className}`;
      return (
        <Icon alt="HomeFloorA" className={classNames} {...propsRest}>
          <path d="M12,3L2,12H5V20H19V12H22L12,3M11,8H13A2,2 0 0,1 15,10V18H13V15H11V18H9V10C9,8.89 9.9,8 11,8M11,10V13H13V10H11Z" />

        </Icon>
      );
    };
    HomeFloorAIcon.displayName = 'HomeFloorAIcon';
      