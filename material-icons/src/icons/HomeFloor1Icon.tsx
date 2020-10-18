import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const HomeFloor1Icon: FC<IconInterface> = function HomeFloor1Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `HomeFloor1Icon ${className}`;
      return (
        <Icon alt="HomeFloor1" className={classNames} {...propsRest}>
          <path d="M12,3L2,12H5V20H19V12H22L12,3M10,8H14V18H12V10H10V8Z" />

        </Icon>
      );
    };
    HomeFloor1Icon.displayName = 'HomeFloor1Icon';
      