import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CloudAlertIcon: FC<IconInterface> = function CloudAlertIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CloudAlertIcon ${className}`;
      return (
        <Icon alt="CloudAlert" className={classNames} {...propsRest}>
          <path d="M19,20H6C2.71,20 0,17.29 0,14C0,10.9 2.34,8.36 5.35,8.03C6.6,5.64 9.11,4 12,4C15.64,4 18.67,6.59 19.35,10.03C21.95,10.22 24,12.36 24,15C24,17.74 21.74,20 19,20M11,15V17H13V15H11M11,13H13V8H11V13Z" />

        </Icon>
      );
    };
    CloudAlertIcon.displayName = 'CloudAlertIcon';
      