import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SignalOffIcon: FC<IconInterface> = function SignalOffIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SignalOffIcon ${className}`;
      return (
        <Icon alt="SignalOff" className={classNames} {...propsRest}>
          <path d="M18,3V16.18L21,19.18V3H18M4.28,5L3,6.27L10.73,14H8V21H11V14.27L13,16.27V21H16V19.27L19.73,23L21,21.72L4.28,5M13,9V11.18L16,14.18V9H13M3,18V21H6V18H3Z" />

        </Icon>
      );
    };
    SignalOffIcon.displayName = 'SignalOffIcon';
      