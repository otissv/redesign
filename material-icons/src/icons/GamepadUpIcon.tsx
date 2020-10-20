import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const GamepadUpIcon: FC<IconInterface> = function GamepadUpIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GamepadUpIcon ${className}`;
      return (
        <Icon alt="GamepadUp" className={classNames} {...propsRest}>
          <path d="M9,2V7.5L12,10.5L15,7.5V2H9M11,4H13V6H11V4M2,9V15H7.5L10.5,12L7.5,9H2M16.5,9L13.5,12L16.5,15H22V9H16.5M12,13.5L9,16.5V22H15V16.5L12,13.5Z" />

        </Icon>
      );
    };
    GamepadUpIcon.displayName = 'GamepadUpIcon';
      