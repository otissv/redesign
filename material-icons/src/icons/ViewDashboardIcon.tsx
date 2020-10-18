import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ViewDashboardIcon: FC<IconInterface> = function ViewDashboardIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewDashboardIcon ${className}`;
      return (
        <Icon alt="ViewDashboard" className={classNames} {...propsRest}>
          <path d="M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z" />

        </Icon>
      );
    };
    ViewDashboardIcon.displayName = 'ViewDashboardIcon';
      