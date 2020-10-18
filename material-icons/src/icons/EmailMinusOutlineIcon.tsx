import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const EmailMinusOutlineIcon: FC<IconInterface> = function EmailMinusOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `EmailMinusOutlineIcon ${className}`;
      return (
        <Icon alt="EmailMinusOutline" className={classNames} {...propsRest}>
          <path d="M16 18V20H24V18H16M14 18H3V8L11 13L19 8V16H21V6C21 4.9 20.1 4 19 4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H14V18M19 6L11 11L3 6H19Z" />

        </Icon>
      );
    };
    EmailMinusOutlineIcon.displayName = 'EmailMinusOutlineIcon';
      