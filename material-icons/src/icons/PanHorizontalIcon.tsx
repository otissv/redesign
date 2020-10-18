import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PanHorizontalIcon: FC<IconInterface> = function PanHorizontalIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PanHorizontalIcon ${className}`;
      return (
        <Icon alt="PanHorizontal" className={classNames} {...propsRest}>
          <path d="M7,8L2.5,12L7,16V8M17,8V16L21.5,12L17,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z" />

        </Icon>
      );
    };
    PanHorizontalIcon.displayName = 'PanHorizontalIcon';
      