import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const StopCircleIcon: FC<IconInterface> = function StopCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `StopCircleIcon ${className}`;
      return (
        <Icon alt="StopCircle" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M9,9H15V15H9" />

        </Icon>
      );
    };
    StopCircleIcon.displayName = 'StopCircleIcon';
      