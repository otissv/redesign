import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AccountPlusIcon: FC<IconInterface> = function AccountPlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AccountPlusIcon ${className}`;
      return (
        <Icon alt="AccountPlus" className={classNames} {...propsRest}>
          <path d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z" />

        </Icon>
      );
    };
    AccountPlusIcon.displayName = 'AccountPlusIcon';
      