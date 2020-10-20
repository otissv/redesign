import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const InboxIcon: FC<IconInterface> = function InboxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `InboxIcon ${className}`;
      return (
        <Icon alt="Inbox" className={classNames} {...propsRest}>
          <path d="M19,15H15A3,3 0 0,1 12,18A3,3 0 0,1 9,15H5V5H19M19,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" />

        </Icon>
      );
    };
    InboxIcon.displayName = 'InboxIcon';
      