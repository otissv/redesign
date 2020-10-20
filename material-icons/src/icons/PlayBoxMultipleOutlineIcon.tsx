import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PlayBoxMultipleOutlineIcon: FC<IconInterface> = function PlayBoxMultipleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PlayBoxMultipleOutlineIcon ${className}`;
      return (
        <Icon alt="PlayBoxMultipleOutline" className={classNames} {...propsRest}>
          <path d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6M20 4V16H8V4H20M20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2M12 14.5V5.5L18 10L12 14.5Z" />

        </Icon>
      );
    };
    PlayBoxMultipleOutlineIcon.displayName = 'PlayBoxMultipleOutlineIcon';
      