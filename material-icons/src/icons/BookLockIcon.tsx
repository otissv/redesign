import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BookLockIcon: FC<IconInterface> = function BookLockIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BookLockIcon ${className}`;
      return (
        <Icon alt="BookLock" className={classNames} {...propsRest}>
          <path d="M18,2H12V9L9.5,7.5L7,9V2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V4A2,2 0 0,0 18,2M18,20H10V16H11V15A3,3 0 0,1 14,12A3,3 0 0,1 17,15V16H18V20M15,15V16H13V15A1,1 0 0,1 14,14A1,1 0 0,1 15,15Z" />

        </Icon>
      );
    };
    BookLockIcon.displayName = 'BookLockIcon';
      