import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const DeleteAlertIcon: FC<IconInterface> = function DeleteAlertIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DeleteAlertIcon ${className}`;
      return (
        <Icon alt="DeleteAlert" className={classNames} {...propsRest}>
          <path d="M17 4V6H3V4H6.5L7.5 3H12.5L13.5 4H17M4 19V7H16V19C16 20.1 15.1 21 14 21H6C4.9 21 4 20.1 4 19M19 16H21V18H19V16M19 9H21V14H19V9Z" />

        </Icon>
      );
    };
    DeleteAlertIcon.displayName = 'DeleteAlertIcon';
      