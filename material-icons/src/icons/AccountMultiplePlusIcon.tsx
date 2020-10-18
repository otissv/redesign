import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AccountMultiplePlusIcon: FC<IconInterface> = function AccountMultiplePlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AccountMultiplePlusIcon ${className}`;
      return (
        <Icon alt="AccountMultiplePlus" className={classNames} {...propsRest}>
          <path d="M19 17V19H7V17S7 13 13 13 19 17 19 17M16 8A3 3 0 1 0 13 11A3 3 0 0 0 16 8M19.2 13.06A5.6 5.6 0 0 1 21 17V19H24V17S24 13.55 19.2 13.06M18 5A2.91 2.91 0 0 0 17.11 5.14A5 5 0 0 1 17.11 10.86A2.91 2.91 0 0 0 18 11A3 3 0 0 0 18 5M8 10H5V7H3V10H0V12H3V15H5V12H8Z" />

        </Icon>
      );
    };
    AccountMultiplePlusIcon.displayName = 'AccountMultiplePlusIcon';
      