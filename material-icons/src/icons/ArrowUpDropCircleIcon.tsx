import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowUpDropCircleIcon: FC<IconInterface> = function ArrowUpDropCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowUpDropCircleIcon ${className}`;
      return (
        <Icon alt="ArrowUpDropCircle" className={classNames} {...propsRest}>
          <path d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M17,14L12,9L7,14H17Z" />

        </Icon>
      );
    };
    ArrowUpDropCircleIcon.displayName = 'ArrowUpDropCircleIcon';
      