import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowUpCircleIcon: FC<IconInterface> = function ArrowUpCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowUpCircleIcon ${className}`;
      return (
        <Icon alt="ArrowUpCircle" className={classNames} {...propsRest}>
          <path d="M13,18V10L16.5,13.5L17.92,12.08L12,6.16L6.08,12.08L7.5,13.5L11,10V18H13M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />

        </Icon>
      );
    };
    ArrowUpCircleIcon.displayName = 'ArrowUpCircleIcon';
      