import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const TrayIcon: FC<IconInterface> = function TrayIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TrayIcon ${className}`;
      return (
        <Icon alt="Tray" className={classNames} {...propsRest}>
          <path d="M2 12H4V17H20V12H22V17A2 2 0 0 1 20 19H4A2 2 0 0 1 2 17Z" />

        </Icon>
      );
    };
    TrayIcon.displayName = 'TrayIcon';
      