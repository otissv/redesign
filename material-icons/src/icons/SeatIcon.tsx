import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SeatIcon: FC<IconInterface> = function SeatIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SeatIcon ${className}`;
      return (
        <Icon alt="Seat" className={classNames} {...propsRest}>
          <path d="M4,18V21H7V18H17V21H20V15H4V18M19,10H22V13H19V10M2,10H5V13H2V10M17,13H7V5A2,2 0 0,1 9,3H15A2,2 0 0,1 17,5V13Z" />

        </Icon>
      );
    };
    SeatIcon.displayName = 'SeatIcon';
      