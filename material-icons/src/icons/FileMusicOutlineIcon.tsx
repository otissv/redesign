import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FileMusicOutlineIcon: FC<IconInterface> = function FileMusicOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileMusicOutlineIcon ${className}`;
      return (
        <Icon alt="FileMusicOutline" className={classNames} {...propsRest}>
          <path d="M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M13,10V12H11V17A2,2 0 0,1 9,19A2,2 0 0,1 7,17A2,2 0 0,1 9,15C9.4,15 9.7,15.1 10,15.3V10H13Z" />

        </Icon>
      );
    };
    FileMusicOutlineIcon.displayName = 'FileMusicOutlineIcon';
      