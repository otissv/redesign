import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const Dice2Icon: FC<IconInterface> = function Dice2Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `Dice2Icon ${className}`;
      return (
        <Icon alt="Dice2" className={classNames} {...propsRest}>
          <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5M17,15A2,2 0 0,0 15,17A2,2 0 0,0 17,19A2,2 0 0,0 19,17A2,2 0 0,0 17,15Z" />

        </Icon>
      );
    };
    Dice2Icon.displayName = 'Dice2Icon';
      