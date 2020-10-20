import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TooltipPlusOutlineIcon: FC<IconInterface> = function TooltipPlusOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TooltipPlusOutlineIcon ${className}`;
      return (
        <Icon alt="TooltipPlusOutline" className={classNames} {...propsRest}>
          <path d="M4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H16L12,22L8,18H4A2,2 0 0,1 2,16V4A2,2 0 0,1 4,2M4,4V16H8.83L12,19.17L15.17,16H20V4H4M11,6H13V9H16V11H13V14H11V11H8V9H11V6Z" />

        </Icon>
      );
    };
    TooltipPlusOutlineIcon.displayName = 'TooltipPlusOutlineIcon';
      