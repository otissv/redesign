import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MessageMinusIcon: FC<IconInterface> = function MessageMinusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MessageMinusIcon ${className}`;
      return (
        <Icon alt="MessageMinus" className={classNames} {...propsRest}>
          <path d="M20 2C21.11 2 22 2.9 22 4V16C22 17.11 21.11 18 20 18H6L2 22V4C2 2.89 2.9 2 4 2H20M8 9V11H16V9H8Z" />

        </Icon>
      );
    };
    MessageMinusIcon.displayName = 'MessageMinusIcon';
      