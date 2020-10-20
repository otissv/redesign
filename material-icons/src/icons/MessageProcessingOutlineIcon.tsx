import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MessageProcessingOutlineIcon: FC<IconInterface> = function MessageProcessingOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MessageProcessingOutlineIcon ${className}`;
      return (
        <Icon alt="MessageProcessingOutline" className={classNames} {...propsRest}>
          <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M20 16H6L4 18V4H20M17 11H15V9H17M13 11H11V9H13M9 11H7V9H9" />

        </Icon>
      );
    };
    MessageProcessingOutlineIcon.displayName = 'MessageProcessingOutlineIcon';
      