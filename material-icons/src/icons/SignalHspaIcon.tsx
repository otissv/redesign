import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SignalHspaIcon: FC<IconInterface> = function SignalHspaIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SignalHspaIcon ${className}`;
      return (
        <Icon alt="SignalHspa" className={classNames} {...propsRest}>
          <path d="M10.5,10.5H13.5V4.5H16.5V19.5H13.5V13.5H10.5V19.5H7.5V4.5H10.5V10.5Z" />

        </Icon>
      );
    };
    SignalHspaIcon.displayName = 'SignalHspaIcon';
      