import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MessagePlusOutlineIcon: FC<IconInterface> = function MessagePlusOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MessagePlusOutlineIcon ${className}`;
      return (
        <Icon alt="MessagePlusOutline" className={classNames} {...propsRest}>
          <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2M20 16H6L4 18V4H20M16 9V11H13V14H11V11H8V9H11V6H13V9H16Z" />

        </Icon>
      );
    };
    MessagePlusOutlineIcon.displayName = 'MessagePlusOutlineIcon';
      