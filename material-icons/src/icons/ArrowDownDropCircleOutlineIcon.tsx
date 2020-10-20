import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowDownDropCircleOutlineIcon: FC<IconInterface> = function ArrowDownDropCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowDownDropCircleOutlineIcon ${className}`;
      return (
        <Icon alt="ArrowDownDropCircleOutline" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M7,10L12,15L17,10H7Z" />

        </Icon>
      );
    };
    ArrowDownDropCircleOutlineIcon.displayName = 'ArrowDownDropCircleOutlineIcon';
      