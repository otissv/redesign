import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BatteryCharging70Icon: FC<IconInterface> = function BatteryCharging70Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `BatteryCharging70Icon ${className}`;
      return (
        <Icon alt="BatteryCharging70" className={classNames} {...propsRest}>
          <path d="M12,10H4V6H12M12.67,4H11V2H5V4H3.33A1.33,1.33 0 0,0 2,5.33V20.67C2,21.4 2.6,22 3.33,22H12.67C13.4,22 14,21.4 14,20.67V5.33A1.33,1.33 0 0,0 12.67,4M23,11H20V4L15,14H18V22L23,11Z" />

        </Icon>
      );
    };
    BatteryCharging70Icon.displayName = 'BatteryCharging70Icon';
      