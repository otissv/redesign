import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const GamepadCircleLeftIcon: FC<IconInterface> = function GamepadCircleLeftIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GamepadCircleLeftIcon ${className}`;
      return (
        <Icon alt="GamepadCircleLeft" className={classNames} {...propsRest}>
          <path d="M5,8A4,4 0 0,1 9,12A4,4 0 0,1 5,16A4,4 0 0,1 1,12A4,4 0 0,1 5,8M12,1A4,4 0 0,1 16,5A4,4 0 0,1 12,9A4,4 0 0,1 8,5A4,4 0 0,1 12,1M12,15A4,4 0 0,1 16,19A4,4 0 0,1 12,23A4,4 0 0,1 8,19A4,4 0 0,1 12,15M19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16A4,4 0 0,1 15,12A4,4 0 0,1 19,8M19,10A2,2 0 0,0 17,12A2,2 0 0,0 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10M12,17A2,2 0 0,0 10,19A2,2 0 0,0 12,21A2,2 0 0,0 14,19A2,2 0 0,0 12,17M12,3A2,2 0 0,0 10,5A2,2 0 0,0 12,7A2,2 0 0,0 14,5A2,2 0 0,0 12,3Z" />

        </Icon>
      );
    };
    GamepadCircleLeftIcon.displayName = 'GamepadCircleLeftIcon';
      