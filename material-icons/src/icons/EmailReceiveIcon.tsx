import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const EmailReceiveIcon: FC<IconInterface> = function EmailReceiveIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `EmailReceiveIcon ${className}`;
      return (
        <Icon alt="EmailReceive" className={classNames} {...propsRest}>
          <path d="M22 20H18V23L13 18.5L18 14V17H22V20M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H11.35A5.8 5.8 0 0 1 11 18A6 6 0 0 1 22 14.69V6A2 2 0 0 0 20 4M20 8L12 13L4 8V6L12 11L20 6Z" />

        </Icon>
      );
    };
    EmailReceiveIcon.displayName = 'EmailReceiveIcon';
      