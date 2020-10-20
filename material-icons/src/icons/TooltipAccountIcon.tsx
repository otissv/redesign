import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TooltipAccountIcon: FC<IconInterface> = function TooltipAccountIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TooltipAccountIcon ${className}`;
      return (
        <Icon alt="TooltipAccount" className={classNames} {...propsRest}>
          <path d="M20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H8L12,22L16,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M12,4.3C13.5,4.3 14.7,5.5 14.7,7C14.7,8.5 13.5,9.7 12,9.7C10.5,9.7 9.3,8.5 9.3,7C9.3,5.5 10.5,4.3 12,4.3M18,15H6V14.1C6,12.1 10,11 12,11C14,11 18,12.1 18,14.1V15Z" />

        </Icon>
      );
    };
    TooltipAccountIcon.displayName = 'TooltipAccountIcon';
      