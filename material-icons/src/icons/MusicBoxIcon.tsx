import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MusicBoxIcon: FC<IconInterface> = function MusicBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MusicBoxIcon ${className}`;
      return (
        <Icon alt="MusicBox" className={classNames} {...propsRest}>
          <path d="M16,9H13V14.5A2.5,2.5 0 0,1 10.5,17A2.5,2.5 0 0,1 8,14.5A2.5,2.5 0 0,1 10.5,12C11.07,12 11.58,12.19 12,12.5V7H16M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" />

        </Icon>
      );
    };
    MusicBoxIcon.displayName = 'MusicBoxIcon';
      