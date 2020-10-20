import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const EmailOutlineIcon: FC<IconInterface> = function EmailOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `EmailOutlineIcon ${className}`;
      return (
        <Icon alt="EmailOutline" className={classNames} {...propsRest}>
          <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" />

        </Icon>
      );
    };
    EmailOutlineIcon.displayName = 'EmailOutlineIcon';
      