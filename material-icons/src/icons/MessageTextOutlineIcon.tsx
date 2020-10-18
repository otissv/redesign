import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MessageTextOutlineIcon: FC<IconInterface> = function MessageTextOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MessageTextOutlineIcon ${className}`;
      return (
        <Icon alt="MessageTextOutline" className={classNames} {...propsRest}>
          <path d="M20,2A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H6L2,22V4C2,2.89 2.9,2 4,2H20M4,4V17.17L5.17,16H20V4H4M6,7H18V9H6V7M6,11H15V13H6V11Z" />

        </Icon>
      );
    };
    MessageTextOutlineIcon.displayName = 'MessageTextOutlineIcon';
      