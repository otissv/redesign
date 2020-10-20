import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MusicIcon: FC<IconInterface> = function MusicIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MusicIcon ${className}`;
      return (
        <Icon alt="Music" className={classNames} {...propsRest}>
          <path d="M21,3V15.5A3.5,3.5 0 0,1 17.5,19A3.5,3.5 0 0,1 14,15.5A3.5,3.5 0 0,1 17.5,12C18.04,12 18.55,12.12 19,12.34V6.47L9,8.6V17.5A3.5,3.5 0 0,1 5.5,21A3.5,3.5 0 0,1 2,17.5A3.5,3.5 0 0,1 5.5,14C6.04,14 6.55,14.12 7,14.34V6L21,3Z" />

        </Icon>
      );
    };
    MusicIcon.displayName = 'MusicIcon';
      