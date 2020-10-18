import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PlaylistPlusIcon: FC<IconInterface> = function PlaylistPlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PlaylistPlusIcon ${className}`;
      return (
        <Icon alt="PlaylistPlus" className={classNames} {...propsRest}>
          <path d="M2,16H10V14H2M18,14V10H16V14H12V16H16V20H18V16H22V14M14,6H2V8H14M14,10H2V12H14V10Z" />

        </Icon>
      );
    };
    PlaylistPlusIcon.displayName = 'PlaylistPlusIcon';
      