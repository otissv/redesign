import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MonitorIcon: FC<IconInterface> = function MonitorIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MonitorIcon ${className}`;
      return (
        <Icon alt="Monitor" className={classNames} {...propsRest}>
          <path d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z" />

        </Icon>
      );
    };
    MonitorIcon.displayName = 'MonitorIcon';
      