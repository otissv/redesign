import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowLeftBoldCircleOutlineIcon: FC<IconInterface> = function ArrowLeftBoldCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowLeftBoldCircleOutlineIcon ${className}`;
      return (
        <Icon alt="ArrowLeftBoldCircleOutline" className={classNames} {...propsRest}>
          <path d="M7,12L12,7V10H16V14H12V17L7,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12Z" />

        </Icon>
      );
    };
    ArrowLeftBoldCircleOutlineIcon.displayName = 'ArrowLeftBoldCircleOutlineIcon';
      