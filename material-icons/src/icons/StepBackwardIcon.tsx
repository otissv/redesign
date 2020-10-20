import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const StepBackwardIcon: FC<IconInterface> = function StepBackwardIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `StepBackwardIcon ${className}`;
      return (
        <Icon alt="StepBackward" className={classNames} {...propsRest}>
          <path d="M19,5V19H16V5M14,5V19L3,12" />

        </Icon>
      );
    };
    StepBackwardIcon.displayName = 'StepBackwardIcon';
      