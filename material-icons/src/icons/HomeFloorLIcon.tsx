import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const HomeFloorLIcon: FC<IconInterface> = function HomeFloorLIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HomeFloorLIcon ${className}`;
      return (
        <Icon alt="HomeFloorL" className={classNames} {...propsRest}>
          <path d="M12,3L2,12H5V20H19V12H22L12,3M9,8H11V16H15V18H9V8Z" />

        </Icon>
      );
    };
    HomeFloorLIcon.displayName = 'HomeFloorLIcon';
      