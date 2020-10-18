import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CarElectricIcon: FC<IconInterface> = function CarElectricIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CarElectricIcon ${className}`;
      return (
        <Icon alt="CarElectric" className={classNames} {...propsRest}>
          <path d="M5,13L6.5,8.5H17.5L19,13M17.5,18A1.5,1.5 0 0,1 16,16.5A1.5,1.5 0 0,1 17.5,15A1.5,1.5 0 0,1 19,16.5A1.5,1.5 0 0,1 17.5,18M6.5,18A1.5,1.5 0 0,1 5,16.5A1.5,1.5 0 0,1 6.5,15A1.5,1.5 0 0,1 8,16.5A1.5,1.5 0 0,1 6.5,18M18.92,8C18.71,7.4 18.14,7 17.5,7H6.5C5.86,7 5.29,7.4 5.08,8L3,14V22A1,1 0 0,0 4,23H5A1,1 0 0,0 6,22V21H18V22A1,1 0 0,0 19,23H20A1,1 0 0,0 21,22V14M11,6V4H7L13,1V3H17L11,6Z" />

        </Icon>
      );
    };
    CarElectricIcon.displayName = 'CarElectricIcon';
      