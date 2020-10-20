import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MessageAlertIcon: FC<IconInterface> = function MessageAlertIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MessageAlertIcon ${className}`;
      return (
        <Icon alt="MessageAlert" className={classNames} {...propsRest}>
          <path d="M13,10H11V6H13M13,14H11V12H13M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z" />

        </Icon>
      );
    };
    MessageAlertIcon.displayName = 'MessageAlertIcon';
      