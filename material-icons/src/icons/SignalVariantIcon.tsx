import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SignalVariantIcon: FC<IconInterface> = function SignalVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SignalVariantIcon ${className}`;
      return (
        <Icon alt="SignalVariant" className={classNames} {...propsRest}>
          <path d="M4,6V4H4.1C12.9,4 20,11.1 20,19.9V20H18V19.9C18,12.2 11.8,6 4,6M4,10V8A12,12 0 0,1 16,20H14A10,10 0 0,0 4,10M4,14V12A8,8 0 0,1 12,20H10A6,6 0 0,0 4,14M4,16A4,4 0 0,1 8,20H4V16Z" />

        </Icon>
      );
    };
    SignalVariantIcon.displayName = 'SignalVariantIcon';
      