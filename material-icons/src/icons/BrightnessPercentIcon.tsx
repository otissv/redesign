import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BrightnessPercentIcon: FC<IconInterface> = function BrightnessPercentIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BrightnessPercentIcon ${className}`;
      return (
        <Icon alt="BrightnessPercent" className={classNames} {...propsRest}>
          <path d="M20.04,8.71V4H15.34L12,0.69L8.71,4H4V8.71L0.69,12L4,15.34V20.04H8.71L12,23.35L15.34,20.04H20.04V15.34L23.35,12L20.04,8.71M8.83,7.05C9.81,7.05 10.6,7.84 10.6,8.83A1.77,1.77 0 0,1 8.83,10.6C7.84,10.6 7.05,9.81 7.05,8.83C7.05,7.84 7.84,7.05 8.83,7.05M15.22,17C14.24,17 13.45,16.2 13.45,15.22A1.77,1.77 0 0,1 15.22,13.45C16.2,13.45 17,14.24 17,15.22A1.78,1.78 0 0,1 15.22,17M8.5,17.03L7,15.53L15.53,7L17.03,8.5L8.5,17.03Z" />

        </Icon>
      );
    };
    BrightnessPercentIcon.displayName = 'BrightnessPercentIcon';
      