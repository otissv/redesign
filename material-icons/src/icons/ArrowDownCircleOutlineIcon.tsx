import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowDownCircleOutlineIcon: FC<IconInterface> = function ArrowDownCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowDownCircleOutlineIcon ${className}`;
      return (
        <Icon alt="ArrowDownCircleOutline" className={classNames} {...propsRest}>
          <path d="M11,6H13V14L16.5,10.5L17.92,11.92L12,17.84L6.08,11.92L7.5,10.5L11,14V6M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20Z" />

        </Icon>
      );
    };
    ArrowDownCircleOutlineIcon.displayName = 'ArrowDownCircleOutlineIcon';
      