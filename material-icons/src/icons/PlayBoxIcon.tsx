import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PlayBoxIcon: FC<IconInterface> = function PlayBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PlayBoxIcon ${className}`;
      return (
        <Icon alt="PlayBox" className={classNames} {...propsRest}>
          <path d="M19 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3M10 16V8L15 12" />

        </Icon>
      );
    };
    PlayBoxIcon.displayName = 'PlayBoxIcon';
      