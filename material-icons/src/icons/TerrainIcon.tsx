import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TerrainIcon: FC<IconInterface> = function TerrainIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TerrainIcon ${className}`;
      return (
        <Icon alt="Terrain" className={classNames} {...propsRest}>
          <path d="M14,6L10.25,11L13.1,14.8L11.5,16C9.81,13.75 7,10 7,10L1,18H23L14,6Z" />

        </Icon>
      );
    };
    TerrainIcon.displayName = 'TerrainIcon';
      