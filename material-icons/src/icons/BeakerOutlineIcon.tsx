import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const BeakerOutlineIcon: FC<IconInterface> = function BeakerOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BeakerOutlineIcon ${className}`;
      return (
        <Icon alt="BeakerOutline" className={classNames} {...propsRest}>
          <path d="M3,3H21V5A2,2 0 0,0 19,7V19A2,2 0 0,1 17,21H7A2,2 0 0,1 5,19V7A2,2 0 0,0 3,5V3M7,5V7H12V8H7V9H10V10H7V11H10V12H7V13H12V14H7V15H10V16H7V19H17V5H7Z" />

        </Icon>
      );
    };
    BeakerOutlineIcon.displayName = 'BeakerOutlineIcon';
      