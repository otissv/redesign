import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const WaterIcon: FC<IconInterface> = function WaterIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `WaterIcon ${className}`;
      return (
        <Icon alt="Water" className={classNames} {...propsRest}>
          <path d="M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z" />

        </Icon>
      );
    };
    WaterIcon.displayName = 'WaterIcon';
      