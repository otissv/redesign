import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AxisZArrowIcon: FC<IconInterface> = function AxisZArrowIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AxisZArrowIcon ${className}`;
      return (
        <Icon alt="AxisZArrow" className={classNames} {...propsRest}>
          <path d="M12,2L16,6H13V13.82L22.39,19.25L21.39,21L12,15.56L2.61,21L1.61,19.25L11,13.82V6H8L12,2Z" />

        </Icon>
      );
    };
    AxisZArrowIcon.displayName = 'AxisZArrowIcon';
      