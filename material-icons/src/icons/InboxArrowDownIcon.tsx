import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const InboxArrowDownIcon: FC<IconInterface> = function InboxArrowDownIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `InboxArrowDownIcon ${className}`;
      return (
        <Icon alt="InboxArrowDown" className={classNames} {...propsRest}>
          <path d="M16,10H14V7H10V10H8L12,14M19,15H15A3,3 0 0,1 12,18A3,3 0 0,1 9,15H5V5H19M19,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" />

        </Icon>
      );
    };
    InboxArrowDownIcon.displayName = 'InboxArrowDownIcon';
      