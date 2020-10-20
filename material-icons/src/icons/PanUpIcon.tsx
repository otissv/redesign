import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PanUpIcon: FC<IconInterface> = function PanUpIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PanUpIcon ${className}`;
      return (
        <Icon alt="PanUp" className={classNames} {...propsRest}>
          <path d="M12,2.5L8,7H16L12,2.5M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z" />

        </Icon>
      );
    };
    PanUpIcon.displayName = 'PanUpIcon';
      