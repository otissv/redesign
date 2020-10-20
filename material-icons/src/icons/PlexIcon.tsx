import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PlexIcon: FC<IconInterface> = function PlexIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PlexIcon ${className}`;
      return (
        <Icon alt="Plex" className={classNames} {...propsRest}>
          <path d="M4,2C2.89,2 2,2.89 2,4V20C2,21.11 2.89,22 4,22H20C21.11,22 22,21.11 22,20V4C22,2.89 21.11,2 20,2H4M8.56,6H12.06L15.5,12L12.06,18H8.56L12,12L8.56,6Z" />

        </Icon>
      );
    };
    PlexIcon.displayName = 'PlexIcon';
      