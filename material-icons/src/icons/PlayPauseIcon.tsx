import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PlayPauseIcon: FC<IconInterface> = function PlayPauseIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PlayPauseIcon ${className}`;
      return (
        <Icon alt="PlayPause" className={classNames} {...propsRest}>
          <path d="M3,5V19L11,12M13,19H16V5H13M18,5V19H21V5" />

        </Icon>
      );
    };
    PlayPauseIcon.displayName = 'PlayPauseIcon';
      