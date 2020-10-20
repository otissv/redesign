import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const DeleteAlertOutlineIcon: FC<IconInterface> = function DeleteAlertOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DeleteAlertOutlineIcon ${className}`;
      return (
        <Icon alt="DeleteAlertOutline" className={classNames} {...propsRest}>
          <path d="M4 19V7H16V19C16 20.1 15.1 21 14 21H6C4.9 21 4 20.1 4 19M6 9V19H14V9H6M13.5 4H17V6H3V4H6.5L7.5 3H12.5L13.5 4M19 18V16H21V18H19M19 14V9H21V14H19Z" />

        </Icon>
      );
    };
    DeleteAlertOutlineIcon.displayName = 'DeleteAlertOutlineIcon';
      