import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const StepBackward2Icon: FC<IconInterface> = function StepBackward2Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `StepBackward2Icon ${className}`;
      return (
        <Icon alt="StepBackward2" className={classNames} {...propsRest}>
          <path d="M17,5H14V19H17V5M12,5L1,12L12,19V5M22,5H19V19H22V5Z" />

        </Icon>
      );
    };
    StepBackward2Icon.displayName = 'StepBackward2Icon';
      