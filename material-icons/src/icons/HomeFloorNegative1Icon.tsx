import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const HomeFloorNegative1Icon: FC<IconInterface> = function HomeFloorNegative1Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `HomeFloorNegative1Icon ${className}`;
      return (
        <Icon alt="HomeFloorNegative1" className={classNames} {...propsRest}>
          <path d="M12,3L2,12H5V20H19V12H22L12,3M11,15H7V13H11V15M15,18H13V10H11V8H15V18Z" />

        </Icon>
      );
    };
    HomeFloorNegative1Icon.displayName = 'HomeFloorNegative1Icon';
      