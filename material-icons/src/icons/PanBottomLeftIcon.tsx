import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PanBottomLeftIcon: FC<IconInterface> = function PanBottomLeftIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PanBottomLeftIcon ${className}`;
      return (
        <Icon alt="PanBottomLeft" className={classNames} {...propsRest}>
          <path d="M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M5.35,13L11,18.65L5,19L5.35,13Z" />

        </Icon>
      );
    };
    PanBottomLeftIcon.displayName = 'PanBottomLeftIcon';
      