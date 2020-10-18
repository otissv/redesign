import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AccountStarOutlineIcon: FC<IconInterface> = function AccountStarOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AccountStarOutlineIcon ${className}`;
      return (
        <Icon alt="AccountStarOutline" className={classNames} {...propsRest}>
          <path d="M15,4A4,4 0 0,1 19,8A4,4 0 0,1 15,12A4,4 0 0,1 11,8A4,4 0 0,1 15,4M15,5.9A2.1,2.1 0 0,0 12.9,8A2.1,2.1 0 0,0 15,10.1C16.16,10.1 17.1,9.16 17.1,8C17.1,6.84 16.16,5.9 15,5.9M15,13C17.67,13 23,14.33 23,17V20H7V17C7,14.33 12.33,13 15,13M15,14.9C12,14.9 8.9,16.36 8.9,17V18.1H21.1V17C21.1,16.36 17.97,14.9 15,14.9M5,13.28L2.5,14.77L3.18,11.96L1,10.08L3.87,9.83L5,7.19L6.11,9.83L9,10.08L6.8,11.96L7.45,14.77L5,13.28Z" />

        </Icon>
      );
    };
    AccountStarOutlineIcon.displayName = 'AccountStarOutlineIcon';
      