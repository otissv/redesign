import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PanIcon: FC<IconInterface> = function PanIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PanIcon ${className}`;
      return (
        <Icon alt="Pan" className={classNames} {...propsRest}>
          <path d="M12,2.5L8,7H16L12,2.5M7,8L2.5,12L7,16V8M17,8V16L21.5,12L17,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M8,17L12,21.5L16,17H8Z" />

        </Icon>
      );
    };
    PanIcon.displayName = 'PanIcon';
      