import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowDownCircleIcon: FC<IconInterface> = function ArrowDownCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowDownCircleIcon ${className}`;
      return (
        <Icon alt="ArrowDownCircle" className={classNames} {...propsRest}>
          <path d="M11,6V14L7.5,10.5L6.08,11.92L12,17.84L17.92,11.92L16.5,10.5L13,14V6H11M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22Z" />

        </Icon>
      );
    };
    ArrowDownCircleIcon.displayName = 'ArrowDownCircleIcon';
      