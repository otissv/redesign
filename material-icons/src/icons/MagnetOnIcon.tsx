import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MagnetOnIcon: FC<IconInterface> = function MagnetOnIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MagnetOnIcon ${className}`;
      return (
        <Icon alt="MagnetOn" className={classNames} {...propsRest}>
          <path d="M3,7V13A9,9 0 0,0 12,22A9,9 0 0,0 21,13V7H17V13A5,5 0 0,1 12,18A5,5 0 0,1 7,13V7M17,5H21V2H17M3,5H7V2H3M13,1.5L9,9H11V14.5L15,7H13V1.5Z" />

        </Icon>
      );
    };
    MagnetOnIcon.displayName = 'MagnetOnIcon';
      