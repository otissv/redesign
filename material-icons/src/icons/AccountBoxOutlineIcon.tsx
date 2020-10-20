import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AccountBoxOutlineIcon: FC<IconInterface> = function AccountBoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AccountBoxOutlineIcon ${className}`;
      return (
        <Icon alt="AccountBoxOutline" className={classNames} {...propsRest}>
          <path d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M16.5,16.25C16.5,14.75 13.5,14 12,14C10.5,14 7.5,14.75 7.5,16.25V17H16.5M12,12.25A2.25,2.25 0 0,0 14.25,10A2.25,2.25 0 0,0 12,7.75A2.25,2.25 0 0,0 9.75,10A2.25,2.25 0 0,0 12,12.25Z" />

        </Icon>
      );
    };
    AccountBoxOutlineIcon.displayName = 'AccountBoxOutlineIcon';
      