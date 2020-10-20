import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MessageTextIcon: FC<IconInterface> = function MessageTextIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MessageTextIcon ${className}`;
      return (
        <Icon alt="MessageText" className={classNames} {...propsRest}>
          <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M6,9H18V11H6M14,14H6V12H14M18,8H6V6H18" />

        </Icon>
      );
    };
    MessageTextIcon.displayName = 'MessageTextIcon';
      