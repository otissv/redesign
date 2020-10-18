import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const NotificationClearAllIcon: FC<IconInterface> = function NotificationClearAllIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `NotificationClearAllIcon ${className}`;
      return (
        <Icon alt="NotificationClearAll" className={classNames} {...propsRest}>
          <path d="M5,13H19V11H5M3,17H17V15H3M7,7V9H21V7" />

        </Icon>
      );
    };
    NotificationClearAllIcon.displayName = 'NotificationClearAllIcon';
      