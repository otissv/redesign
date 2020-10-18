import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const StepForward2Icon: FC<IconInterface> = function StepForward2Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `StepForward2Icon ${className}`;
      return (
        <Icon alt="StepForward2" className={classNames} {...propsRest}>
          <path d="M7,5H10V19H7V5M12,5L23,12L12,19V5M2,5H5V19H2V5Z" />

        </Icon>
      );
    };
    StepForward2Icon.displayName = 'StepForward2Icon';
      