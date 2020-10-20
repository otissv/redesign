import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const DiscAlertIcon: FC<IconInterface> = function DiscAlertIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DiscAlertIcon ${className}`;
      return (
        <Icon alt="DiscAlert" className={classNames} {...propsRest}>
          <path d="M10,14C8.89,14 8,13.1 8,12C8,10.89 8.89,10 10,10A2,2 0 0,1 12,12A2,2 0 0,1 10,14M10,4A8,8 0 0,0 2,12A8,8 0 0,0 10,20A8,8 0 0,0 18,12A8,8 0 0,0 10,4M20,12H22V7H20M20,16H22V14H20V16Z" />

        </Icon>
      );
    };
    DiscAlertIcon.displayName = 'DiscAlertIcon';
      