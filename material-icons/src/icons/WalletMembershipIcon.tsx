import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const WalletMembershipIcon: FC<IconInterface> = function WalletMembershipIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `WalletMembershipIcon ${className}`;
      return (
        <Icon alt="WalletMembership" className={classNames} {...propsRest}>
          <path d="M20,10H4V4H20M20,15H4V13H20M20,2H4C2.89,2 2,2.89 2,4V15C2,16.11 2.89,17 4,17H8V22L12,20L16,22V17H20C21.11,17 22,16.11 22,15V4C22,2.89 21.11,2 20,2Z" />

        </Icon>
      );
    };
    WalletMembershipIcon.displayName = 'WalletMembershipIcon';
      