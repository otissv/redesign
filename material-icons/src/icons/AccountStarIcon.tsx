import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AccountStarIcon: FC<IconInterface> = function AccountStarIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AccountStarIcon ${className}`;
      return (
        <Icon alt="AccountStar" className={classNames} {...propsRest}>
          <path d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12M5,13.28L7.45,14.77L6.8,11.96L9,10.08L6.11,9.83L5,7.19L3.87,9.83L1,10.08L3.18,11.96L2.5,14.77L5,13.28Z" />

        </Icon>
      );
    };
    AccountStarIcon.displayName = 'AccountStarIcon';
      