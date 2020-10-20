import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const Store24HourIcon: FC<IconInterface> = function Store24HourIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Store24HourIcon ${className}`;
      return (
        <Icon alt="Store24Hour" className={classNames} {...propsRest}>
          <path d="M16,12H15V10H13V7H14V9H15V7H16M11,10H9V11H11V12H8V9H10V8H8V7H11M19,7V4H5V7H2V20H10V16H14V20H22V7H19Z" />

        </Icon>
      );
    };
    Store24HourIcon.displayName = 'Store24HourIcon';
      