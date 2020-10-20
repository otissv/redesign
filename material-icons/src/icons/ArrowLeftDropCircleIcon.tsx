import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowLeftDropCircleIcon: FC<IconInterface> = function ArrowLeftDropCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowLeftDropCircleIcon ${className}`;
      return (
        <Icon alt="ArrowLeftDropCircle" className={classNames} {...propsRest}>
          <path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M14,7L9,12L14,17V7Z" />

        </Icon>
      );
    };
    ArrowLeftDropCircleIcon.displayName = 'ArrowLeftDropCircleIcon';
      