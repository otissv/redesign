import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const WalletPlusOutlineIcon: FC<IconInterface> = function WalletPlusOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `WalletPlusOutlineIcon ${className}`;
      return (
        <Icon alt="WalletPlusOutline" className={classNames} {...propsRest}>
          <path d="M3 0V3H0V5H3V8H5V5H8V3H5V0H3M10 3V5H19V7H13C11.9 7 11 7.9 11 9V15C11 16.1 11.9 17 13 17H19V19H5V10H3V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V16.72C21.59 16.37 22 15.74 22 15V9C22 8.26 21.59 7.63 21 7.28V5C21 3.9 20.1 3 19 3H10M13 9H20V15H13V9M16 10.5A1.5 1.5 0 0 0 14.5 12A1.5 1.5 0 0 0 16 13.5A1.5 1.5 0 0 0 17.5 12A1.5 1.5 0 0 0 16 10.5Z" />

        </Icon>
      );
    };
    WalletPlusOutlineIcon.displayName = 'WalletPlusOutlineIcon';
      