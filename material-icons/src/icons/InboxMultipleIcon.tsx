import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const InboxMultipleIcon: FC<IconInterface> = function InboxMultipleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `InboxMultipleIcon ${className}`;
      return (
        <Icon alt="InboxMultiple" className={classNames} {...propsRest}>
          <path d="M19,8V5H5V8H9A3,3 0 0,0 12,11A3,3 0 0,0 15,8H19M19,3A2,2 0 0,1 21,5V12A2,2 0 0,1 19,14H5A2,2 0 0,1 3,12V5A2,2 0 0,1 5,3H19M3,15H9A3,3 0 0,0 12,18A3,3 0 0,0 15,15H21V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V15Z" />

        </Icon>
      );
    };
    InboxMultipleIcon.displayName = 'InboxMultipleIcon';
      