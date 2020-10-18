import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CarBatteryIcon: FC<IconInterface> = function CarBatteryIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CarBatteryIcon ${className}`;
      return (
        <Icon alt="CarBattery" className={classNames} {...propsRest}>
          <path d="M4,3V6H1V20H23V6H20V3H14V6H10V3H4M3,8H21V18H3V8M15,10V12H13V14H15V16H17V14H19V12H17V10H15M5,12V14H11V12H5Z" />

        </Icon>
      );
    };
    CarBatteryIcon.displayName = 'CarBatteryIcon';
      