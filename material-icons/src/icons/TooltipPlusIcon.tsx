import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TooltipPlusIcon: FC<IconInterface> = function TooltipPlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TooltipPlusIcon ${className}`;
      return (
        <Icon alt="TooltipPlus" className={classNames} {...propsRest}>
          <path d="M4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H16L12,22L8,18H4A2,2 0 0,1 2,16V4A2,2 0 0,1 4,2M11,6V9H8V11H11V14H13V11H16V9H13V6H11Z" />

        </Icon>
      );
    };
    TooltipPlusIcon.displayName = 'TooltipPlusIcon';
      