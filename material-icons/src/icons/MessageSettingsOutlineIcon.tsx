import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MessageSettingsOutlineIcon: FC<IconInterface> = function MessageSettingsOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MessageSettingsOutlineIcon ${className}`;
      return (
        <Icon alt="MessageSettingsOutline" className={classNames} {...propsRest}>
          <path d="M11 24H13V22H11V24M7 24H9V22H7V24M15 24H17V22H15V24M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M20 16H6L4 18V4H20" />

        </Icon>
      );
    };
    MessageSettingsOutlineIcon.displayName = 'MessageSettingsOutlineIcon';
      