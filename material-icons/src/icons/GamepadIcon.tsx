import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const GamepadIcon: FC<IconInterface> = function GamepadIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GamepadIcon ${className}`;
      return (
        <Icon alt="Gamepad" className={classNames} {...propsRest}>
          <path d="M16.5,9L13.5,12L16.5,15H22V9M9,16.5V22H15V16.5L12,13.5M7.5,9H2V15H7.5L10.5,12M15,7.5V2H9V7.5L12,10.5L15,7.5Z" />

        </Icon>
      );
    };
    GamepadIcon.displayName = 'GamepadIcon';
      