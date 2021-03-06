import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PlayBoxMultipleIcon: FC<IconInterface> = function PlayBoxMultipleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PlayBoxMultipleIcon ${className}`;
      return (
        <Icon alt="PlayBoxMultiple" className={classNames} {...propsRest}>
          <path d="M4,6H2V20A2,2 0 0,0 4,22H18V20H4V6M20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M12,14.5V5.5L18,10L12,14.5Z" />

        </Icon>
      );
    };
    PlayBoxMultipleIcon.displayName = 'PlayBoxMultipleIcon';
      