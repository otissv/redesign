import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PanLeftIcon: FC<IconInterface> = function PanLeftIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PanLeftIcon ${className}`;
      return (
        <Icon alt="PanLeft" className={classNames} {...propsRest}>
          <path d="M7,8L2.5,12L7,16V8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z" />

        </Icon>
      );
    };
    PanLeftIcon.displayName = 'PanLeftIcon';
      