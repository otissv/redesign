import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowUpBoldCircleOutlineIcon: FC<IconInterface> = function ArrowUpBoldCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowUpBoldCircleOutlineIcon ${className}`;
      return (
        <Icon alt="ArrowUpBoldCircleOutline" className={classNames} {...propsRest}>
          <path d="M12,7L17,12H14V16H10V12H7L12,7M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20Z" />

        </Icon>
      );
    };
    ArrowUpBoldCircleOutlineIcon.displayName = 'ArrowUpBoldCircleOutlineIcon';
      