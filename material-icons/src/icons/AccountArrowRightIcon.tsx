import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AccountArrowRightIcon: FC<IconInterface> = function AccountArrowRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AccountArrowRightIcon ${className}`;
      return (
        <Icon alt="AccountArrowRight" className={classNames} {...propsRest}>
          <path d="M19,21V19H15V17H19V15L22,18L19,21M10,4A4,4 0 0,1 14,8A4,4 0 0,1 10,12A4,4 0 0,1 6,8A4,4 0 0,1 10,4M10,14C11.15,14 12.25,14.12 13.24,14.34C12.46,15.35 12,16.62 12,18C12,18.7 12.12,19.37 12.34,20H2V18C2,15.79 5.58,14 10,14Z" />

        </Icon>
      );
    };
    AccountArrowRightIcon.displayName = 'AccountArrowRightIcon';
      