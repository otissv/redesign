import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MessageIcon: FC<IconInterface> = function MessageIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MessageIcon ${className}`;
      return (
        <Icon alt="Message" className={classNames} {...propsRest}>
          <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z" />

        </Icon>
      );
    };
    MessageIcon.displayName = 'MessageIcon';
      