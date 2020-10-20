import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ClockTimeFiveIcon: FC<IconInterface> = function ClockTimeFiveIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ClockTimeFiveIcon ${className}`;
      return (
        <Icon alt="ClockTimeFive" className={classNames} {...propsRest}>
          <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M14 17L11 11.8V7H12.5V11.4L15.3 16.3L14 17Z" />

        </Icon>
      );
    };
    ClockTimeFiveIcon.displayName = 'ClockTimeFiveIcon';
      