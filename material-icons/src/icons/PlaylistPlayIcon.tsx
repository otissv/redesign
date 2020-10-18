import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PlaylistPlayIcon: FC<IconInterface> = function PlaylistPlayIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PlaylistPlayIcon ${className}`;
      return (
        <Icon alt="PlaylistPlay" className={classNames} {...propsRest}>
          <path d="M19,9H2V11H19V9M19,5H2V7H19V5M2,15H15V13H2V15M17,13V19L22,16L17,13Z" />

        </Icon>
      );
    };
    PlaylistPlayIcon.displayName = 'PlaylistPlayIcon';
      