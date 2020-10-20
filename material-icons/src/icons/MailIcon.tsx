import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MailIcon: FC<IconInterface> = function MailIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MailIcon ${className}`;
      return (
        <Icon alt="Mail" className={classNames} {...propsRest}>
          <path d="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M17,17H7V15H17M17,13H7V11H17M20,9H17V6H20" />

        </Icon>
      );
    };
    MailIcon.displayName = 'MailIcon';
      