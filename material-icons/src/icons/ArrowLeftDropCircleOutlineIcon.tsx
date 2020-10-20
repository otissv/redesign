import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowLeftDropCircleOutlineIcon: FC<IconInterface> = function ArrowLeftDropCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowLeftDropCircleOutlineIcon ${className}`;
      return (
        <Icon alt="ArrowLeftDropCircleOutline" className={classNames} {...propsRest}>
          <path d="M22,12A10,10 0 0,0 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12M14,7L9,12L14,17V7Z" />

        </Icon>
      );
    };
    ArrowLeftDropCircleOutlineIcon.displayName = 'ArrowLeftDropCircleOutlineIcon';
      