import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const GamepadRoundOutlineIcon: FC<IconInterface> = function GamepadRoundOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GamepadRoundOutlineIcon ${className}`;
      return (
        <Icon alt="GamepadRoundOutline" className={classNames} {...propsRest}>
          <path d="M4,8H8V4A2,2 0 0,1 10,2H14A2,2 0 0,1 16,4V8H20A2,2 0 0,1 22,10V14A2,2 0 0,1 20,16H16V20A2,2 0 0,1 14,22H10A2,2 0 0,1 8,20V16H4A2,2 0 0,1 2,14V10A2,2 0 0,1 4,8M4,10V14H10V20H14V14H20V10H14V4H10V10H4Z" />

        </Icon>
      );
    };
    GamepadRoundOutlineIcon.displayName = 'GamepadRoundOutlineIcon';
      