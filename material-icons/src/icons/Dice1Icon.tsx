import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const Dice1Icon: FC<IconInterface> = function Dice1Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `Dice1Icon ${className}`;
      return (
        <Icon alt="Dice1" className={classNames} {...propsRest}>
          <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z" />

        </Icon>
      );
    };
    Dice1Icon.displayName = 'Dice1Icon';
      