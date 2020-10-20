import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PlayOutlineIcon: FC<IconInterface> = function PlayOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PlayOutlineIcon ${className}`;
      return (
        <Icon alt="PlayOutline" className={classNames} {...propsRest}>
          <path d="M8.5,8.64L13.77,12L8.5,15.36V8.64M6.5,5V19L17.5,12" />

        </Icon>
      );
    };
    PlayOutlineIcon.displayName = 'PlayOutlineIcon';
      