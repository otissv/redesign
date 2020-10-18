import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FuseBladeIcon: FC<IconInterface> = function FuseBladeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FuseBladeIcon ${className}`;
      return (
        <Icon alt="FuseBlade" className={classNames} {...propsRest}>
          <path d="M10,21H8L6,19V16H10V21M18,16H14V21H16L18,19V16M3,3V4A1,1 0 0,0 4,5V14A1,1 0 0,0 5,15H19A1,1 0 0,0 20,14V5H20A1,1 0 0,0 21,4V3H3M11.83,13V9.73H10L12.61,4.66V7.93H14.36L11.83,13Z" />

        </Icon>
      );
    };
    FuseBladeIcon.displayName = 'FuseBladeIcon';
      