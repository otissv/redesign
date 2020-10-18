import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const GamepadRoundUpIcon: FC<IconInterface> = function GamepadRoundUpIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GamepadRoundUpIcon ${className}`;
      return (
        <Icon alt="GamepadRoundUp" className={classNames} {...propsRest}>
          <path d="M4,8H8V4A2,2 0 0,1 10,2H14A2,2 0 0,1 16,4V8H20A2,2 0 0,1 22,10V14A2,2 0 0,1 20,16H16V20A2,2 0 0,1 14,22H10A2,2 0 0,1 8,20V16H4A2,2 0 0,1 2,14V10A2,2 0 0,1 4,8M10,4V8H14V4H10Z" />

        </Icon>
      );
    };
    GamepadRoundUpIcon.displayName = 'GamepadRoundUpIcon';
      