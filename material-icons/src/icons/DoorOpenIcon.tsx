import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const DoorOpenIcon: FC<IconInterface> = function DoorOpenIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DoorOpenIcon ${className}`;
      return (
        <Icon alt="DoorOpen" className={classNames} {...propsRest}>
          <path d="M12,3C10.89,3 10,3.89 10,5H3V19H2V21H22V19H21V5C21,3.89 20.11,3 19,3H12M12,5H19V19H12V5M5,11H7V13H5V11Z" />

        </Icon>
      );
    };
    DoorOpenIcon.displayName = 'DoorOpenIcon';
      