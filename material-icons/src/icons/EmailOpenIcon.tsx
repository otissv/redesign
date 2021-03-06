import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const EmailOpenIcon: FC<IconInterface> = function EmailOpenIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `EmailOpenIcon ${className}`;
      return (
        <Icon alt="EmailOpen" className={classNames} {...propsRest}>
          <path d="M4,8L12,13L20,8V8L12,3L4,8V8M22,8V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V8C2,7.27 2.39,6.64 2.97,6.29L12,0.64L21.03,6.29C21.61,6.64 22,7.27 22,8Z" />

        </Icon>
      );
    };
    EmailOpenIcon.displayName = 'EmailOpenIcon';
      