import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PlaylistCheckIcon: FC<IconInterface> = function PlaylistCheckIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PlaylistCheckIcon ${className}`;
      return (
        <Icon alt="PlaylistCheck" className={classNames} {...propsRest}>
          <path d="M14,10H2V12H14V10M14,6H2V8H14V6M2,16H10V14H2V16M21.5,11.5L23,13L16,20L11.5,15.5L13,14L16,17L21.5,11.5Z" />

        </Icon>
      );
    };
    PlaylistCheckIcon.displayName = 'PlaylistCheckIcon';
      