import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowUpDropCircleOutlineIcon: FC<IconInterface> = function ArrowUpDropCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowUpDropCircleOutlineIcon ${className}`;
      return (
        <Icon alt="ArrowUpDropCircleOutline" className={classNames} {...propsRest}>
          <path d="M12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M17,14L12,9L7,14H17Z" />

        </Icon>
      );
    };
    ArrowUpDropCircleOutlineIcon.displayName = 'ArrowUpDropCircleOutlineIcon';
      