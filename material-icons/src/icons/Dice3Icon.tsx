import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const Dice3Icon: FC<IconInterface> = function Dice3Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `Dice3Icon ${className}`;
      return (
        <Icon alt="Dice3" className={classNames} {...propsRest}>
          <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5M17,15A2,2 0 0,0 15,17A2,2 0 0,0 17,19A2,2 0 0,0 19,17A2,2 0 0,0 17,15Z" />

        </Icon>
      );
    };
    Dice3Icon.displayName = 'Dice3Icon';
      