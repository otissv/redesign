import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SignalHspaPlusIcon: FC<IconInterface> = function SignalHspaPlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SignalHspaPlusIcon ${className}`;
      return (
        <Icon alt="SignalHspaPlus" className={classNames} {...propsRest}>
          <path d="M19,8V11H22V14H19V17H16V14H13V11H16V8H19M5,10.5H8V4.5H11V19.5H8V13.5H5V19.5H2V4.5H5V10.5Z" />

        </Icon>
      );
    };
    SignalHspaPlusIcon.displayName = 'SignalHspaPlusIcon';
      