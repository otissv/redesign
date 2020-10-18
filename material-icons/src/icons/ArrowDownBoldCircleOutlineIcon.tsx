import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowDownBoldCircleOutlineIcon: FC<IconInterface> = function ArrowDownBoldCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowDownBoldCircleOutlineIcon ${className}`;
      return (
        <Icon alt="ArrowDownBoldCircleOutline" className={classNames} {...propsRest}>
          <path d="M12,17L7,12H10V8H14V12H17L12,17M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />

        </Icon>
      );
    };
    ArrowDownBoldCircleOutlineIcon.displayName = 'ArrowDownBoldCircleOutlineIcon';
      