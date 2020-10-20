import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const GamepadVariantIcon: FC<IconInterface> = function GamepadVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GamepadVariantIcon ${className}`;
      return (
        <Icon alt="GamepadVariant" className={classNames} {...propsRest}>
          <path d="M7,6H17A6,6 0 0,1 23,12A6,6 0 0,1 17,18C15.22,18 13.63,17.23 12.53,16H11.47C10.37,17.23 8.78,18 7,18A6,6 0 0,1 1,12A6,6 0 0,1 7,6M6,9V11H4V13H6V15H8V13H10V11H8V9H6M15.5,12A1.5,1.5 0 0,0 14,13.5A1.5,1.5 0 0,0 15.5,15A1.5,1.5 0 0,0 17,13.5A1.5,1.5 0 0,0 15.5,12M18.5,9A1.5,1.5 0 0,0 17,10.5A1.5,1.5 0 0,0 18.5,12A1.5,1.5 0 0,0 20,10.5A1.5,1.5 0 0,0 18.5,9Z" />

        </Icon>
      );
    };
    GamepadVariantIcon.displayName = 'GamepadVariantIcon';
      