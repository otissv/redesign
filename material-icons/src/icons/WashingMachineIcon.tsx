import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const WashingMachineIcon: FC<IconInterface> = function WashingMachineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `WashingMachineIcon ${className}`;
      return (
        <Icon alt="WashingMachine" className={classNames} {...propsRest}>
          <path d="M14.83,11.17C16.39,12.73 16.39,15.27 14.83,16.83C13.27,18.39 10.73,18.39 9.17,16.83L14.83,11.17M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M7,4A1,1 0 0,0 6,5A1,1 0 0,0 7,6A1,1 0 0,0 8,5A1,1 0 0,0 7,4M10,4A1,1 0 0,0 9,5A1,1 0 0,0 10,6A1,1 0 0,0 11,5A1,1 0 0,0 10,4M12,8A6,6 0 0,0 6,14A6,6 0 0,0 12,20A6,6 0 0,0 18,14A6,6 0 0,0 12,8Z" />

        </Icon>
      );
    };
    WashingMachineIcon.displayName = 'WashingMachineIcon';
      