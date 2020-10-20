import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const LogoutIcon: FC<IconInterface> = function LogoutIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LogoutIcon ${className}`;
      return (
        <Icon alt="Logout" className={classNames} {...propsRest}>
          <path d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z" />

        </Icon>
      );
    };
    LogoutIcon.displayName = 'LogoutIcon';
      