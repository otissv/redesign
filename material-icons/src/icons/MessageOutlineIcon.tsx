import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MessageOutlineIcon: FC<IconInterface> = function MessageOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MessageOutlineIcon ${className}`;
      return (
        <Icon alt="MessageOutline" className={classNames} {...propsRest}>
          <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M20,16H6L4,18V4H20" />

        </Icon>
      );
    };
    MessageOutlineIcon.displayName = 'MessageOutlineIcon';
      