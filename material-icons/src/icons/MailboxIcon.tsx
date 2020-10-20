import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MailboxIcon: FC<IconInterface> = function MailboxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MailboxIcon ${className}`;
      return (
        <Icon alt="Mailbox" className={classNames} {...propsRest}>
          <path d="M17,4H7A5,5 0 0,0 2,9V20H20A2,2 0 0,0 22,18V9A5,5 0 0,0 17,4M10,18H4V9A3,3 0 0,1 7,6A3,3 0 0,1 10,9V18M19,15H17V13H13V11H19V15M9,11H5V9H9V11Z" />

        </Icon>
      );
    };
    MailboxIcon.displayName = 'MailboxIcon';
      