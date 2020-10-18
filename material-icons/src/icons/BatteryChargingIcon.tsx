import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const BatteryChargingIcon: FC<IconInterface> = function BatteryChargingIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BatteryChargingIcon ${className}`;
      return (
        <Icon alt="BatteryCharging" className={classNames} {...propsRest}>
          <path d="M16.67,4H15V2H9V4H7.33A1.33,1.33 0 0,0 6,5.33V20.66C6,21.4 6.6,22 7.33,22H16.66C17.4,22 18,21.4 18,20.67V5.33C18,4.6 17.4,4 16.67,4M11,20V14.5H9L13,7V12.5H15" />

        </Icon>
      );
    };
    BatteryChargingIcon.displayName = 'BatteryChargingIcon';
      