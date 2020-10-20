import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TapeMeasureIcon: FC<IconInterface> = function TapeMeasureIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TapeMeasureIcon ${className}`;
      return (
        <Icon alt="TapeMeasure" className={classNames} {...propsRest}>
          <path d="M9,5A7,7 0 0,1 16,12H17V15H16V19H9A7,7 0 0,1 2,12A7,7 0 0,1 9,5M9,8A4,4 0 0,0 5,12A4,4 0 0,0 9,16A4,4 0 0,0 13,12A4,4 0 0,0 9,8M17,17H22V19L22,21H20V19H17V17Z" />

        </Icon>
      );
    };
    TapeMeasureIcon.displayName = 'TapeMeasureIcon';
      