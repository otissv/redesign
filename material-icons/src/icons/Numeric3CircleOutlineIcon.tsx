import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const Numeric3CircleOutlineIcon: FC<IconInterface> = function Numeric3CircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric3CircleOutlineIcon ${className}`;
      return (
        <Icon alt="Numeric3CircleOutline" className={classNames} {...propsRest}>
          <path d="M15,15A2,2 0 0,1 13,17H9V15H13V13H11V11H13V9H9V7H13A2,2 0 0,1 15,9V10.5A1.5,1.5 0 0,1 13.5,12A1.5,1.5 0 0,1 15,13.5V15M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />

        </Icon>
      );
    };
    Numeric3CircleOutlineIcon.displayName = 'Numeric3CircleOutlineIcon';
      