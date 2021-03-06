import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SkipPreviousCircleOutlineIcon: FC<IconInterface> = function SkipPreviousCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SkipPreviousCircleOutlineIcon ${className}`;
      return (
        <Icon alt="SkipPreviousCircleOutline" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4C7.59,4 4,7.59 4,12C4,16.41 7.59,20 12,20C16.41,20 20,16.41 20,12C20,7.59 16.41,4 12,4M16,8V16L11,12M10,8V16H8V8" />

        </Icon>
      );
    };
    SkipPreviousCircleOutlineIcon.displayName = 'SkipPreviousCircleOutlineIcon';
      