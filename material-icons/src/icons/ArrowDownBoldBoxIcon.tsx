import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowDownBoldBoxIcon: FC<IconInterface> = function ArrowDownBoldBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowDownBoldBoxIcon ${className}`;
      return (
        <Icon alt="ArrowDownBoldBox" className={classNames} {...propsRest}>
          <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M12,17L17,12H14V8H10V12H7L12,17Z" />

        </Icon>
      );
    };
    ArrowDownBoldBoxIcon.displayName = 'ArrowDownBoldBoxIcon';
      