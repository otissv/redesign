import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const GateAndIcon: FC<IconInterface> = function GateAndIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GateAndIcon ${className}`;
      return (
        <Icon alt="GateAnd" className={classNames} {...propsRest}>
          <path d="M2,4V20H14A8,8 0 0,0 22,12A8,8 0 0,0 14,4H2M4,6H14A6,6 0 0,1 20,12A6,6 0 0,1 14,18H4V6Z" />

        </Icon>
      );
    };
    GateAndIcon.displayName = 'GateAndIcon';
      