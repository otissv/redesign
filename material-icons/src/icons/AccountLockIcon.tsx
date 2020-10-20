import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AccountLockIcon: FC<IconInterface> = function AccountLockIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AccountLockIcon ${className}`;
      return (
        <Icon alt="AccountLock" className={classNames} {...propsRest}>
          <path d="M22 17V16.5C22 15.12 20.88 14 19.5 14S17 15.12 17 16.5V17C16.45 17 16 17.45 16 18V22C16 22.55 16.45 23 17 23H22C22.55 23 23 22.55 23 22V18C23 17.45 22.55 17 22 17M21 17H18V16.5C18 15.67 18.67 15 19.5 15S21 15.67 21 16.5V17M8 8C8 5.79 9.79 4 12 4S16 5.79 16 8 14.21 12 12 12 8 10.21 8 8M14 20H4V18C4 15.79 7.58 14 12 14C13.27 14 14.46 14.15 15.53 14.41C15.32 14.82 15.15 15.25 15.07 15.71C14.42 16.26 14 17.08 14 18V20Z" />

        </Icon>
      );
    };
    AccountLockIcon.displayName = 'AccountLockIcon';
      