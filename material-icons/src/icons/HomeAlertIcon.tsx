import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const HomeAlertIcon: FC<IconInterface> = function HomeAlertIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HomeAlertIcon ${className}`;
      return (
        <Icon alt="HomeAlert" className={classNames} {...propsRest}>
          <path d="M12,3L2,12H5V20H19V12H22L12,3M13,18H11V16H13V18M13,14H11V9H13V14Z" />

        </Icon>
      );
    };
    HomeAlertIcon.displayName = 'HomeAlertIcon';
      