import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const HomeFloor2Icon: FC<IconInterface> = function HomeFloor2Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `HomeFloor2Icon ${className}`;
      return (
        <Icon alt="HomeFloor2" className={classNames} {...propsRest}>
          <path d="M12,3L2,12H5V20H19V12H22L12,3M9,8H13A2,2 0 0,1 15,10V12A2,2 0 0,1 13,14H11V16H15V18H9V14A2,2 0 0,1 11,12H13V10H9V8Z" />

        </Icon>
      );
    };
    HomeFloor2Icon.displayName = 'HomeFloor2Icon';
      