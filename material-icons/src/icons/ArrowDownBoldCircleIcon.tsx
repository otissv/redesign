import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowDownBoldCircleIcon: FC<IconInterface> = function ArrowDownBoldCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowDownBoldCircleIcon ${className}`;
      return (
        <Icon alt="ArrowDownBoldCircle" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,17L17,12H14V8H10V12H7L12,17Z" />

        </Icon>
      );
    };
    ArrowDownBoldCircleIcon.displayName = 'ArrowDownBoldCircleIcon';
      