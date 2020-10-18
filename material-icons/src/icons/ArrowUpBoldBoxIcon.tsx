import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowUpBoldBoxIcon: FC<IconInterface> = function ArrowUpBoldBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowUpBoldBoxIcon ${className}`;
      return (
        <Icon alt="ArrowUpBoldBox" className={classNames} {...propsRest}>
          <path d="M19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21M12,7L7,12H10V16H14V12H17L12,7Z" />

        </Icon>
      );
    };
    ArrowUpBoldBoxIcon.displayName = 'ArrowUpBoldBoxIcon';
      