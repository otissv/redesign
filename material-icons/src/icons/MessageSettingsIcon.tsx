import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MessageSettingsIcon: FC<IconInterface> = function MessageSettingsIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MessageSettingsIcon ${className}`;
      return (
        <Icon alt="MessageSettings" className={classNames} {...propsRest}>
          <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M11,24H13V22H11V24M7,24H9V22H7V24M15,24H17V22H15V24Z" />

        </Icon>
      );
    };
    MessageSettingsIcon.displayName = 'MessageSettingsIcon';
      