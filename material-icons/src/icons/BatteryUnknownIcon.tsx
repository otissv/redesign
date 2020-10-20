import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BatteryUnknownIcon: FC<IconInterface> = function BatteryUnknownIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BatteryUnknownIcon ${className}`;
      return (
        <Icon alt="BatteryUnknown" className={classNames} {...propsRest}>
          <path d="M15.07,12.25L14.17,13.17C13.63,13.71 13.25,14.18 13.09,15H11.05C11.16,14.1 11.56,13.28 12.17,12.67L13.41,11.41C13.78,11.05 14,10.55 14,10C14,8.89 13.1,8 12,8A2,2 0 0,0 10,10H8A4,4 0 0,1 12,6A4,4 0 0,1 16,10C16,10.88 15.64,11.68 15.07,12.25M13,19H11V17H13M16.67,4H15V2H9V4H7.33A1.33,1.33 0 0,0 6,5.33V20.66C6,21.4 6.6,22 7.33,22H16.67C17.4,22 18,21.4 18,20.66V5.33C18,4.59 17.4,4 16.67,4Z" />

        </Icon>
      );
    };
    BatteryUnknownIcon.displayName = 'BatteryUnknownIcon';
      