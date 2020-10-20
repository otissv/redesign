import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PauseCircleIcon: FC<IconInterface> = function PauseCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PauseCircleIcon ${className}`;
      return (
        <Icon alt="PauseCircle" className={classNames} {...propsRest}>
          <path d="M15,16H13V8H15M11,16H9V8H11M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />

        </Icon>
      );
    };
    PauseCircleIcon.displayName = 'PauseCircleIcon';
      