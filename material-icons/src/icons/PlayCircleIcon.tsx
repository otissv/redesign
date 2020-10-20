import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PlayCircleIcon: FC<IconInterface> = function PlayCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PlayCircleIcon ${className}`;
      return (
        <Icon alt="PlayCircle" className={classNames} {...propsRest}>
          <path d="M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />

        </Icon>
      );
    };
    PlayCircleIcon.displayName = 'PlayCircleIcon';
      