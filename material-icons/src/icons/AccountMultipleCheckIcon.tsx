import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AccountMultipleCheckIcon: FC<IconInterface> = function AccountMultipleCheckIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AccountMultipleCheckIcon ${className}`;
      return (
        <Icon alt="AccountMultipleCheck" className={classNames} {...propsRest}>
          <path d="M19 17V19H7V17S7 13 13 13 19 17 19 17M16 8A3 3 0 1 0 13 11A3 3 0 0 0 16 8M19.2 13.06A5.6 5.6 0 0 1 21 17V19H24V17S24 13.55 19.2 13.06M18 5A2.91 2.91 0 0 0 17.11 5.14A5 5 0 0 1 17.11 10.86A2.91 2.91 0 0 0 18 11A3 3 0 0 0 18 5M7.34 8.92L8.5 10.33L3.75 15.08L1 12.08L2.16 10.92L3.75 12.5L7.34 8.92" />

        </Icon>
      );
    };
    AccountMultipleCheckIcon.displayName = 'AccountMultipleCheckIcon';
      