import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const HydraulicOilLevelIcon: FC<IconInterface> = function HydraulicOilLevelIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HydraulicOilLevelIcon ${className}`;
      return (
        <Icon alt="HydraulicOilLevel" className={classNames} {...propsRest}>
          <path d="M15 18C13.34 18 12 16.66 12 15C12 13 15 9.63 15 9.63S18 13 18 15C18 16.66 16.66 18 15 18M20 4V20H10V4H8V20C8 21.11 8.89 22 10 22H20C21.11 22 22 21.11 22 20V4H20M2 19L7 14L2 9V19M16 6V2H14V6H11V8H19V6H16Z" />

        </Icon>
      );
    };
    HydraulicOilLevelIcon.displayName = 'HydraulicOilLevelIcon';
      