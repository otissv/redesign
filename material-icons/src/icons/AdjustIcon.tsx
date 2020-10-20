import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AdjustIcon: FC<IconInterface> = function AdjustIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AdjustIcon ${className}`;
      return (
        <Icon alt="Adjust" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12Z" />

        </Icon>
      );
    };
    AdjustIcon.displayName = 'AdjustIcon';
      