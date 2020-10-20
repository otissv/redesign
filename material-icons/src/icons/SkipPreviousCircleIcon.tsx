import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SkipPreviousCircleIcon: FC<IconInterface> = function SkipPreviousCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SkipPreviousCircleIcon ${className}`;
      return (
        <Icon alt="SkipPreviousCircle" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M8,8H10V16H8M16,8V16L11,12" />

        </Icon>
      );
    };
    SkipPreviousCircleIcon.displayName = 'SkipPreviousCircleIcon';
      