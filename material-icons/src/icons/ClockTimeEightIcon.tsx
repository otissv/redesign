import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ClockTimeEightIcon: FC<IconInterface> = function ClockTimeEightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ClockTimeEightIcon ${className}`;
      return (
        <Icon alt="ClockTimeEight" className={classNames} {...propsRest}>
          <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M7.7 15.5L7 14.2L11 11.9V7H12.5V12.8L7.7 15.5Z" />

        </Icon>
      );
    };
    ClockTimeEightIcon.displayName = 'ClockTimeEightIcon';
      