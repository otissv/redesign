import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const TrayAlertIcon: FC<IconInterface> = function TrayAlertIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TrayAlertIcon ${className}`;
      return (
        <Icon alt="TrayAlert" className={classNames} {...propsRest}>
          <path d="M2 12H4V17H20V12H22V17A2 2 0 0 1 20 19H4A2 2 0 0 1 2 17M13 12H11V14H13M13 4H11V10H13Z" />

        </Icon>
      );
    };
    TrayAlertIcon.displayName = 'TrayAlertIcon';
      