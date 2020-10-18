import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const HomeFloor0Icon: FC<IconInterface> = function HomeFloor0Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `HomeFloor0Icon ${className}`;
      return (
        <Icon alt="HomeFloor0" className={classNames} {...propsRest}>
          <path d="M11,10H13V16H11V10M22,12H19V20H5V12H2L12,3L22,12M15,10A2,2 0 0,0 13,8H11A2,2 0 0,0 9,10V16A2,2 0 0,0 11,18H13A2,2 0 0,0 15,16V10Z" />

        </Icon>
      );
    };
    HomeFloor0Icon.displayName = 'HomeFloor0Icon';
      