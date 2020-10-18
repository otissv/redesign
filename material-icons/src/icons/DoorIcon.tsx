import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const DoorIcon: FC<IconInterface> = function DoorIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DoorIcon ${className}`;
      return (
        <Icon alt="Door" className={classNames} {...propsRest}>
          <path d="M8,3C6.89,3 6,3.89 6,5V21H18V5C18,3.89 17.11,3 16,3H8M8,5H16V19H8V5M13,11V13H15V11H13Z" />

        </Icon>
      );
    };
    DoorIcon.displayName = 'DoorIcon';
      