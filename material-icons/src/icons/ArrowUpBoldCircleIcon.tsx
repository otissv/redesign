import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowUpBoldCircleIcon: FC<IconInterface> = function ArrowUpBoldCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowUpBoldCircleIcon ${className}`;
      return (
        <Icon alt="ArrowUpBoldCircle" className={classNames} {...propsRest}>
          <path d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M12,7L7,12H10V16H14V12H17L12,7Z" />

        </Icon>
      );
    };
    ArrowUpBoldCircleIcon.displayName = 'ArrowUpBoldCircleIcon';
      