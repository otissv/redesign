import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PanRightIcon: FC<IconInterface> = function PanRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PanRightIcon ${className}`;
      return (
        <Icon alt="PanRight" className={classNames} {...propsRest}>
          <path d="M17,8V16L21.5,12L17,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z" />

        </Icon>
      );
    };
    PanRightIcon.displayName = 'PanRightIcon';
      