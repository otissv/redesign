import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const StopCircleOutlineIcon: FC<IconInterface> = function StopCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `StopCircleOutlineIcon ${className}`;
      return (
        <Icon alt="StopCircleOutline" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4M9,9V15H15V9" />

        </Icon>
      );
    };
    StopCircleOutlineIcon.displayName = 'StopCircleOutlineIcon';
      