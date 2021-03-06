import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AccountIcon: FC<IconInterface> = function AccountIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AccountIcon ${className}`;
      return (
        <Icon alt="Account" className={classNames} {...propsRest}>
          <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />

        </Icon>
      );
    };
    AccountIcon.displayName = 'AccountIcon';
      