import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SignalIcon: FC<IconInterface> = function SignalIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SignalIcon ${className}`;
      return (
        <Icon alt="Signal" className={classNames} {...propsRest}>
          <path d="M3,21H6V18H3M8,21H11V14H8M13,21H16V9H13M18,21H21V3H18V21Z" />

        </Icon>
      );
    };
    SignalIcon.displayName = 'SignalIcon';
      