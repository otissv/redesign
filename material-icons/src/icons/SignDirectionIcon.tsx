import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SignDirectionIcon: FC<IconInterface> = function SignDirectionIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SignDirectionIcon ${className}`;
      return (
        <Icon alt="SignDirection" className={classNames} {...propsRest}>
          <path d="M11,12H3.5L6,9.5L3.5,7H11V3L12,2L13,3V7H18L20.5,9.5L18,12H13V20A2,2 0 0,1 15,22H9A2,2 0 0,1 11,20V12Z" />

        </Icon>
      );
    };
    SignDirectionIcon.displayName = 'SignDirectionIcon';
      