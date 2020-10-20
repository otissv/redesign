import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AxisYArrowIcon: FC<IconInterface> = function AxisYArrowIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AxisYArrowIcon ${className}`;
      return (
        <Icon alt="AxisYArrow" className={classNames} {...propsRest}>
          <path d="M22.5,20.5L17,21.96L18.53,19.35L12,15.58L2.61,21L1.61,19.27L11,13.85V3H13V13.85L19.53,17.61L21,15.03L22.5,20.5Z" />

        </Icon>
      );
    };
    AxisYArrowIcon.displayName = 'AxisYArrowIcon';
      