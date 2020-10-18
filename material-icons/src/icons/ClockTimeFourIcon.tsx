import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ClockTimeFourIcon: FC<IconInterface> = function ClockTimeFourIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ClockTimeFourIcon ${className}`;
      return (
        <Icon alt="ClockTimeFour" className={classNames} {...propsRest}>
          <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M16.3 15.2L11 12.3V7H12.5V11.4L17 13.9L16.3 15.2Z" />

        </Icon>
      );
    };
    ClockTimeFourIcon.displayName = 'ClockTimeFourIcon';
      