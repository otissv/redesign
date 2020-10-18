import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const LedOutlineIcon: FC<IconInterface> = function LedOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LedOutlineIcon ${className}`;
      return (
        <Icon alt="LedOutline" className={classNames} {...propsRest}>
          <path d="M12,6A4,4 0 0,0 8,10V16H6V18H9V23H11V18H13V23H15V18H18V16H16V10A4,4 0 0,0 12,6M12,8A2,2 0 0,1 14,10V15H10V10A2,2 0 0,1 12,8Z" />

        </Icon>
      );
    };
    LedOutlineIcon.displayName = 'LedOutlineIcon';
      