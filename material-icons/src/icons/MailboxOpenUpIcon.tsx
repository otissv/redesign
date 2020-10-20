import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MailboxOpenUpIcon: FC<IconInterface> = function MailboxOpenUpIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MailboxOpenUpIcon ${className}`;
      return (
        <Icon alt="MailboxOpenUp" className={classNames} {...propsRest}>
          <path d="M8,4A5,5 0 0,0 3,9V18H1V20H21A2,2 0 0,0 23,18V9A5,5 0 0,0 18,4H8M8,6A3,3 0 0,1 11,9V18H5V9A3,3 0 0,1 8,6M13,13V7H17V9H15V13H13Z" />

        </Icon>
      );
    };
    MailboxOpenUpIcon.displayName = 'MailboxOpenUpIcon';
      