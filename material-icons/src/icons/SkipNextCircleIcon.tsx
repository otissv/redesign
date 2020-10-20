import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SkipNextCircleIcon: FC<IconInterface> = function SkipNextCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SkipNextCircleIcon ${className}`;
      return (
        <Icon alt="SkipNextCircle" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M8,8L13,12L8,16M14,8H16V16H14" />

        </Icon>
      );
    };
    SkipNextCircleIcon.displayName = 'SkipNextCircleIcon';
      