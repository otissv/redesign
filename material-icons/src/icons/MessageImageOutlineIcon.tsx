import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MessageImageOutlineIcon: FC<IconInterface> = function MessageImageOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MessageImageOutlineIcon ${className}`;
      return (
        <Icon alt="MessageImageOutline" className={classNames} {...propsRest}>
          <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M20 16H6L4 18V4H20M5 14L8.5 9.5L11 12.5L14.5 8L19 14" />

        </Icon>
      );
    };
    MessageImageOutlineIcon.displayName = 'MessageImageOutlineIcon';
      