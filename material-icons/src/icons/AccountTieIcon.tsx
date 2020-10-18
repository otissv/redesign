import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AccountTieIcon: FC<IconInterface> = function AccountTieIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AccountTieIcon ${className}`;
      return (
        <Icon alt="AccountTie" className={classNames} {...propsRest}>
          <path d="M12,3A4,4 0 0,1 16,7A4,4 0 0,1 12,11A4,4 0 0,1 8,7A4,4 0 0,1 12,3M16,13.54C16,14.6 15.72,17.07 13.81,19.83L13,15L13.94,13.12C13.32,13.05 12.67,13 12,13C11.33,13 10.68,13.05 10.06,13.12L11,15L10.19,19.83C8.28,17.07 8,14.6 8,13.54C5.61,14.24 4,15.5 4,17V21H10L11.09,21H12.91L14,21H20V17C20,15.5 18.4,14.24 16,13.54Z" />

        </Icon>
      );
    };
    AccountTieIcon.displayName = 'AccountTieIcon';
      