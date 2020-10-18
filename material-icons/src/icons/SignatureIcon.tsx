import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SignatureIcon: FC<IconInterface> = function SignatureIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SignatureIcon ${className}`;
      return (
        <Icon alt="Signature" className={classNames} {...propsRest}>
          <path d="M22,22H2V20H22V22M2.26,16.83L5.09,14L2.26,11.17L3.67,9.76L6.5,12.59L9.33,9.76L10.74,11.17L7.91,14L10.74,16.83L9.33,18.24L6.5,15.41L3.67,18.24L2.26,16.83Z" />

        </Icon>
      );
    };
    SignatureIcon.displayName = 'SignatureIcon';
      