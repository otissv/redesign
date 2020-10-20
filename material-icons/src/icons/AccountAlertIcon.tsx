import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AccountAlertIcon: FC<IconInterface> = function AccountAlertIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AccountAlertIcon ${className}`;
      return (
        <Icon alt="AccountAlert" className={classNames} {...propsRest}>
          <path d="M10 4A4 4 0 0 1 14 8A4 4 0 0 1 10 12A4 4 0 0 1 6 8A4 4 0 0 1 10 4M10 14C14.42 14 18 15.79 18 18V20H2V18C2 15.79 5.58 14 10 14M20 12V7H22V13H20M20 17V15H22V17H20Z" />

        </Icon>
      );
    };
    AccountAlertIcon.displayName = 'AccountAlertIcon';
      