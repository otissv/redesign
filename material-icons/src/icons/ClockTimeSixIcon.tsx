import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ClockTimeSixIcon: FC<IconInterface> = function ClockTimeSixIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ClockTimeSixIcon ${className}`;
      return (
        <Icon alt="ClockTimeSix" className={classNames} {...propsRest}>
          <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M12.5 17H11V7H12.5V17Z" />

        </Icon>
      );
    };
    ClockTimeSixIcon.displayName = 'ClockTimeSixIcon';
      