import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FloorPlanIcon: FC<IconInterface> = function FloorPlanIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FloorPlanIcon ${className}`;
      return (
        <Icon alt="FloorPlan" className={classNames} {...propsRest}>
          <path d="M10,5V10H9V5H5V13H9V12H10V17H9V14H5V19H12V17H13V19H19V17H21V21H3V3H21V15H19V10H13V15H12V9H19V5H10Z" />

        </Icon>
      );
    };
    FloorPlanIcon.displayName = 'FloorPlanIcon';
      