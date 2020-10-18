import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowUpBoldBoxOutlineIcon: FC<IconInterface> = function ArrowUpBoldBoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowUpBoldBoxOutlineIcon ${className}`;
      return (
        <Icon alt="ArrowUpBoldBoxOutline" className={classNames} {...propsRest}>
          <path d="M12,7L17,12H14V16H10V12H7L12,7M19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21M19,19V5H5V19H19Z" />

        </Icon>
      );
    };
    ArrowUpBoldBoxOutlineIcon.displayName = 'ArrowUpBoldBoxOutlineIcon';
      