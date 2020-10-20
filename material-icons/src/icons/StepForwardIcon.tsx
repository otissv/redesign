import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const StepForwardIcon: FC<IconInterface> = function StepForwardIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `StepForwardIcon ${className}`;
      return (
        <Icon alt="StepForward" className={classNames} {...propsRest}>
          <path d="M5,5V19H8V5M10,5V19L21,12" />

        </Icon>
      );
    };
    StepForwardIcon.displayName = 'StepForwardIcon';
      