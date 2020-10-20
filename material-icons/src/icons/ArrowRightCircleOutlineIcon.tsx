import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowRightCircleOutlineIcon: FC<IconInterface> = function ArrowRightCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowRightCircleOutlineIcon ${className}`;
      return (
        <Icon alt="ArrowRightCircleOutline" className={classNames} {...propsRest}>
          <path d="M6,13V11H14L10.5,7.5L11.92,6.08L17.84,12L11.92,17.92L10.5,16.5L14,13H6M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12Z" />

        </Icon>
      );
    };
    ArrowRightCircleOutlineIcon.displayName = 'ArrowRightCircleOutlineIcon';
      