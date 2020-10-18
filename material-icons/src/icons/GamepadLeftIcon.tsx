import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const GamepadLeftIcon: FC<IconInterface> = function GamepadLeftIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GamepadLeftIcon ${className}`;
      return (
        <Icon alt="GamepadLeft" className={classNames} {...propsRest}>
          <path d="M9,2V7.5L12,10.5L15,7.5V2H9M2,9V15H7.5L10.5,12L7.5,9H2M16.5,9L13.5,12L16.5,15H22V9H16.5M4,11H6V13H4V11M12,13.5L9,16.5V22H15V16.5L12,13.5Z" />

        </Icon>
      );
    };
    GamepadLeftIcon.displayName = 'GamepadLeftIcon';
      