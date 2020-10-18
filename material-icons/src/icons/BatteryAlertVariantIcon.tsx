import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const BatteryAlertVariantIcon: FC<IconInterface> = function BatteryAlertVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BatteryAlertVariantIcon ${className}`;
      return (
        <Icon alt="BatteryAlertVariant" className={classNames} {...propsRest}>
          <path d="M14.67 4H13V2H7V4H5.33C4.6 4 4 4.6 4 5.33V20.67C4 21.4 4.6 22 5.33 22H14.67C15.4 22 16 21.4 16 20.67V5.33C16 4.6 15.4 4 14.67 4M21 13H19V7H21V13M21 17H19V15H21V17Z" />

        </Icon>
      );
    };
    BatteryAlertVariantIcon.displayName = 'BatteryAlertVariantIcon';
      