import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const TooltipIcon: FC<IconInterface> = function TooltipIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TooltipIcon ${className}`;
      return (
        <Icon alt="Tooltip" className={classNames} {...propsRest}>
          <path d="M4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H16L12,22L8,18H4A2,2 0 0,1 2,16V4A2,2 0 0,1 4,2Z" />

        </Icon>
      );
    };
    TooltipIcon.displayName = 'TooltipIcon';
      