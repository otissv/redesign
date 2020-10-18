import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowRightDropCircleIcon: FC<IconInterface> = function ArrowRightDropCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowRightDropCircleIcon ${className}`;
      return (
        <Icon alt="ArrowRightDropCircle" className={classNames} {...propsRest}>
          <path d="M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M10,17L15,12L10,7V17Z" />

        </Icon>
      );
    };
    ArrowRightDropCircleIcon.displayName = 'ArrowRightDropCircleIcon';
      