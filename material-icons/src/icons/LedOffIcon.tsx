import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const LedOffIcon: FC<IconInterface> = function LedOffIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LedOffIcon ${className}`;
      return (
        <Icon alt="LedOff" className={classNames} {...propsRest}>
          <path d="M12,6A4,4 0 0,0 8,10V16H6V18H9V23H11V18H13V23H15V18H18V16H16V10A4,4 0 0,0 12,6Z" />

        </Icon>
      );
    };
    LedOffIcon.displayName = 'LedOffIcon';
      