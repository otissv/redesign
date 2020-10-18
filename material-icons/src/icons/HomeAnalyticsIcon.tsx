import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const HomeAnalyticsIcon: FC<IconInterface> = function HomeAnalyticsIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HomeAnalyticsIcon ${className}`;
      return (
        <Icon alt="HomeAnalytics" className={classNames} {...propsRest}>
          <path d="M12,3L2,12H5V20H19V12H22M9,18H7V12H9M13,18H11V10H13M17,18H15V14H17" />

        </Icon>
      );
    };
    HomeAnalyticsIcon.displayName = 'HomeAnalyticsIcon';
      