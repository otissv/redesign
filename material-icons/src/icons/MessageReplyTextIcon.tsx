import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MessageReplyTextIcon: FC<IconInterface> = function MessageReplyTextIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MessageReplyTextIcon ${className}`;
      return (
        <Icon alt="MessageReplyText" className={classNames} {...propsRest}>
          <path d="M18,8H6V6H18V8M18,11H6V9H18V11M18,14H6V12H18V14M22,4A2,2 0 0,0 20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H18L22,22V4Z" />

        </Icon>
      );
    };
    MessageReplyTextIcon.displayName = 'MessageReplyTextIcon';
      