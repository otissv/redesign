import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const LoginIcon: FC<IconInterface> = function LoginIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LoginIcon ${className}`;
      return (
        <Icon alt="Login" className={classNames} {...propsRest}>
          <path d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z" />

        </Icon>
      );
    };
    LoginIcon.displayName = 'LoginIcon';
      