import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BatteryNegativeIcon: FC<IconInterface> = function BatteryNegativeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BatteryNegativeIcon ${className}`;
      return (
        <Icon alt="BatteryNegative" className={classNames} {...propsRest}>
          <path d="M11.67,4A1.33,1.33 0 0,1 13,5.33V20.67C13,21.4 12.4,22 11.67,22H2.33C1.6,22 1,21.4 1,20.67V5.33A1.33,1.33 0 0,1 2.33,4H4V2H10V4H11.67M15,12H23V14H15V12M3,13H11V6H3V13Z" />

        </Icon>
      );
    };
    BatteryNegativeIcon.displayName = 'BatteryNegativeIcon';
      