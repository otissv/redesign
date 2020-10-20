import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TooltipImageIcon: FC<IconInterface> = function TooltipImageIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TooltipImageIcon ${className}`;
      return (
        <Icon alt="TooltipImage" className={classNames} {...propsRest}>
          <path d="M4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H16L12,22L8,18H4A2,2 0 0,1 2,16V4A2,2 0 0,1 4,2M19,15V7L15,11L13,9L7,15H19M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5Z" />

        </Icon>
      );
    };
    TooltipImageIcon.displayName = 'TooltipImageIcon';
      