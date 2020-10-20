import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TabletAndroidIcon: FC<IconInterface> = function TabletAndroidIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TabletAndroidIcon ${className}`;
      return (
        <Icon alt="TabletAndroid" className={classNames} {...propsRest}>
          <path d="M19.25,19H4.75V3H19.25M14,22H10V21H14M18,0H6A3,3 0 0,0 3,3V21A3,3 0 0,0 6,24H18A3,3 0 0,0 21,21V3A3,3 0 0,0 18,0Z" />

        </Icon>
      );
    };
    TabletAndroidIcon.displayName = 'TabletAndroidIcon';
      