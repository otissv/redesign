import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowDownBoldBoxOutlineIcon: FC<IconInterface> = function ArrowDownBoldBoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowDownBoldBoxOutlineIcon ${className}`;
      return (
        <Icon alt="ArrowDownBoldBoxOutline" className={classNames} {...propsRest}>
          <path d="M12,17L7,12H10V8H14V12H17L12,17M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5Z" />

        </Icon>
      );
    };
    ArrowDownBoldBoxOutlineIcon.displayName = 'ArrowDownBoldBoxOutlineIcon';
      