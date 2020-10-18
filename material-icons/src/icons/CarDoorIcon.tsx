import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CarDoorIcon: FC<IconInterface> = function CarDoorIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CarDoorIcon ${className}`;
      return (
        <Icon alt="CarDoor" className={classNames} {...propsRest}>
          <path d="M19,14H16V16H19V14M22,21H3V11L11,3H21A1,1 0 0,1 22,4V21M11.83,5L5.83,11H20V5H11.83Z" />

        </Icon>
      );
    };
    CarDoorIcon.displayName = 'CarDoorIcon';
      