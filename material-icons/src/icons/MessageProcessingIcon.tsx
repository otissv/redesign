import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MessageProcessingIcon: FC<IconInterface> = function MessageProcessingIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MessageProcessingIcon ${className}`;
      return (
        <Icon alt="MessageProcessing" className={classNames} {...propsRest}>
          <path d="M17,11H15V9H17M13,11H11V9H13M9,11H7V9H9M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z" />

        </Icon>
      );
    };
    MessageProcessingIcon.displayName = 'MessageProcessingIcon';
      