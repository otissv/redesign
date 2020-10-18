import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AxisXArrowIcon: FC<IconInterface> = function AxisXArrowIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AxisXArrowIcon ${className}`;
      return (
        <Icon alt="AxisXArrow" className={classNames} {...propsRest}>
          <path d="M1.5,20.5L3,15.03L4.46,17.6L11,13.82V3H13V13.82L22.39,19.25L21.39,21L12,15.56L5.46,19.33L7,21.96L1.5,20.5Z" />

        </Icon>
      );
    };
    AxisXArrowIcon.displayName = 'AxisXArrowIcon';
      