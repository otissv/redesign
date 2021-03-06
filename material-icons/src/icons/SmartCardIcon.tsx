import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SmartCardIcon: FC<IconInterface> = function SmartCardIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SmartCardIcon ${className}`;
      return (
        <Icon alt="SmartCard" className={classNames} {...propsRest}>
          <path d="M2 3H22A2.07 2.07 0 0 1 24 5V19A2.07 2.07 0 0 1 22 21H2A2.07 2.07 0 0 1 0 19V5A2.07 2.07 0 0 1 2 3M8 13.91C6 13.91 2 15 2 17V18H14V17C14 15 10 13.91 8 13.91M8 6A3 3 0 1 0 11 9A3 3 0 0 0 8 6M17 10V13H21V10H17" />

        </Icon>
      );
    };
    SmartCardIcon.displayName = 'SmartCardIcon';
      