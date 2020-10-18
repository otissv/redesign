import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const BatteryOffIcon: FC<IconInterface> = function BatteryOffIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BatteryOffIcon ${className}`;
      return (
        <Icon alt="BatteryOff" className={classNames} {...propsRest}>
          <path d="M18 14.8L7.21 4H9V2H15V4H16.67A1.34 1.34 0 0 1 18 5.33M18 17.35L3.38 2.73L2.11 4L6 7.89V20.67A1.34 1.34 0 0 0 7.33 22H16.67A1.34 1.34 0 0 0 18 20.67V19.89L20.84 22.73L22.11 21.46Z" />

        </Icon>
      );
    };
    BatteryOffIcon.displayName = 'BatteryOffIcon';
      