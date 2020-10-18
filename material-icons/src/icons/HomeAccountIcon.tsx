import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const HomeAccountIcon: FC<IconInterface> = function HomeAccountIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HomeAccountIcon ${className}`;
      return (
        <Icon alt="HomeAccount" className={classNames} {...propsRest}>
          <path d="M12,3L2,12H5V20H19V12H22L12,3M12,8.75A2.25,2.25 0 0,1 14.25,11A2.25,2.25 0 0,1 12,13.25A2.25,2.25 0 0,1 9.75,11A2.25,2.25 0 0,1 12,8.75M12,15C13.5,15 16.5,15.75 16.5,17.25V18H7.5V17.25C7.5,15.75 10.5,15 12,15Z" />

        </Icon>
      );
    };
    HomeAccountIcon.displayName = 'HomeAccountIcon';
      