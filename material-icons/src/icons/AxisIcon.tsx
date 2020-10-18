import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AxisIcon: FC<IconInterface> = function AxisIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AxisIcon ${className}`;
      return (
        <Icon alt="Axis" className={classNames} {...propsRest}>
          <path d="M2.61,21L1.61,19.27L11,13.85V3H13V13.85L22.39,19.27L21.39,21L12,15.58L2.61,21Z" />

        </Icon>
      );
    };
    AxisIcon.displayName = 'AxisIcon';
      