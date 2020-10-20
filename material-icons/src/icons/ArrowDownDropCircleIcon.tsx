import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowDownDropCircleIcon: FC<IconInterface> = function ArrowDownDropCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowDownDropCircleIcon ${className}`;
      return (
        <Icon alt="ArrowDownDropCircle" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M7,10L12,15L17,10H7Z" />

        </Icon>
      );
    };
    ArrowDownDropCircleIcon.displayName = 'ArrowDownDropCircleIcon';
      