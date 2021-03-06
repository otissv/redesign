import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const LockerIcon: FC<IconInterface> = function LockerIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LockerIcon ${className}`;
      return (
        <Icon alt="Locker" className={classNames} {...propsRest}>
          <path d="M8,2H16A2,2 0 0,1 18,4V20A2,2 0 0,1 16,22H8A2,2 0 0,1 6,20V4A2,2 0 0,1 8,2M8,4V20H16V4H8M10,13H12V17H10V13M10,6H14V7.5H10V6M10,9H14V10.5H10V9Z" />

        </Icon>
      );
    };
    LockerIcon.displayName = 'LockerIcon';
      