import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SeatOutlineIcon: FC<IconInterface> = function SeatOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SeatOutlineIcon ${className}`;
      return (
        <Icon alt="SeatOutline" className={classNames} {...propsRest}>
          <path d="M15,5V12H9V5H15M15,3H9A2,2 0 0,0 7,5V14H17V5A2,2 0 0,0 15,3M22,10H19V13H22V10M5,10H2V13H5V10M20,15H4V21H6V17H18V21H20V15Z" />

        </Icon>
      );
    };
    SeatOutlineIcon.displayName = 'SeatOutlineIcon';
      