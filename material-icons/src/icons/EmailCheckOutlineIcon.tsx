import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const EmailCheckOutlineIcon: FC<IconInterface> = function EmailCheckOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `EmailCheckOutlineIcon ${className}`;
      return (
        <Icon alt="EmailCheckOutline" className={classNames} {...propsRest}>
          <path d="M23.5 17L18.5 22L15 18.5L16.5 17L18.5 19L22 15.5L23.5 17M13 18H3V8L11 13L19 8V13H21V6C21 4.9 20.1 4 19 4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H13V18M19 6L11 11L3 6H19Z" />

        </Icon>
      );
    };
    EmailCheckOutlineIcon.displayName = 'EmailCheckOutlineIcon';
      