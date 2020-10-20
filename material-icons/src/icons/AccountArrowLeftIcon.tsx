import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AccountArrowLeftIcon: FC<IconInterface> = function AccountArrowLeftIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AccountArrowLeftIcon ${className}`;
      return (
        <Icon alt="AccountArrowLeft" className={classNames} {...propsRest}>
          <path d="M18,21L15,18L18,15V17H22V19H18V21M10,4A4,4 0 0,1 14,8A4,4 0 0,1 10,12A4,4 0 0,1 6,8A4,4 0 0,1 10,4M10,14C11.15,14 12.25,14.12 13.24,14.34C12.46,15.35 12,16.62 12,18C12,18.7 12.12,19.37 12.34,20H2V18C2,15.79 5.58,14 10,14Z" />

        </Icon>
      );
    };
    AccountArrowLeftIcon.displayName = 'AccountArrowLeftIcon';
      