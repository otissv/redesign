import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PlayBoxOutlineIcon: FC<IconInterface> = function PlayBoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PlayBoxOutlineIcon ${className}`;
      return (
        <Icon alt="PlayBoxOutline" className={classNames} {...propsRest}>
          <path d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10,8V16L15,12L10,8Z" />

        </Icon>
      );
    };
    PlayBoxOutlineIcon.displayName = 'PlayBoxOutlineIcon';
      