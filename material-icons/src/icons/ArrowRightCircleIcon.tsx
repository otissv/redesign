import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowRightCircleIcon: FC<IconInterface> = function ArrowRightCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowRightCircleIcon ${className}`;
      return (
        <Icon alt="ArrowRightCircle" className={classNames} {...propsRest}>
          <path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M6,13H14L10.5,16.5L11.92,17.92L17.84,12L11.92,6.08L10.5,7.5L14,11H6V13Z" />

        </Icon>
      );
    };
    ArrowRightCircleIcon.displayName = 'ArrowRightCircleIcon';
      