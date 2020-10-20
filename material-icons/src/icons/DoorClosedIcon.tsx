import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const DoorClosedIcon: FC<IconInterface> = function DoorClosedIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DoorClosedIcon ${className}`;
      return (
        <Icon alt="DoorClosed" className={classNames} {...propsRest}>
          <path d="M16,11H18V13H16V11M12,3H19C20.11,3 21,3.89 21,5V19H22V21H2V19H10V5C10,3.89 10.89,3 12,3M12,5V19H19V5H12Z" />

        </Icon>
      );
    };
    DoorClosedIcon.displayName = 'DoorClosedIcon';
      