import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AccountMultipleRemoveOutlineIcon: FC<IconInterface> = function AccountMultipleRemoveOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AccountMultipleRemoveOutlineIcon ${className}`;
      return (
        <Icon alt="AccountMultipleRemoveOutline" className={classNames} {...propsRest}>
          <path d="M24 17V19H21V17C21 15.45 20.3 14.06 19.18 13.06C24 13.55 24 17 24 17M18 5C19.66 5 21 6.34 21 8C21 9.66 19.66 11 18 11C17.69 11 17.38 10.95 17.1 10.86C17.67 10.05 18 9.07 18 8C18 6.94 17.67 5.95 17.1 5.14C17.38 5.05 17.69 5 18 5M13 5C14.66 5 16 6.34 16 8C16 9.66 14.66 11 13 11C11.34 11 10 9.66 10 8C10 6.34 11.34 5 13 5M19 17V19H7V17C7 14.79 9.69 13 13 13C16.31 13 19 14.79 19 17M13 7C12.45 7 12 7.45 12 8C12 8.55 12.45 9 13 9C13.55 9 14 8.55 14 8C14 7.45 13.55 7 13 7M13 15C10.79 15 9 15.9 9 17H17C17 15.9 15.21 15 13 15M.464 13.12L2.59 11L.464 8.88L1.88 7.46L4 9.59L6.12 7.46L7.54 8.88L5.41 11L7.54 13.12L6.12 14.54L4 12.41L1.88 14.54Z" />

        </Icon>
      );
    };
    AccountMultipleRemoveOutlineIcon.displayName = 'AccountMultipleRemoveOutlineIcon';
      