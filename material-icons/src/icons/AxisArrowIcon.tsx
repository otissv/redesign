import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AxisArrowIcon: FC<IconInterface> = function AxisArrowIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AxisArrowIcon ${className}`;
      return (
        <Icon alt="AxisArrow" className={classNames} {...propsRest}>
          <path d="M12,2L16,6H13V13.85L19.53,17.61L21,15.03L22.5,20.5L17,21.96L18.53,19.35L12,15.58L5.47,19.35L7,21.96L1.5,20.5L3,15.03L4.47,17.61L11,13.85V6H8L12,2Z" />

        </Icon>
      );
    };
    AxisArrowIcon.displayName = 'AxisArrowIcon';
      