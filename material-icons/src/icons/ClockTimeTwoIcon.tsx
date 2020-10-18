import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ClockTimeTwoIcon: FC<IconInterface> = function ClockTimeTwoIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ClockTimeTwoIcon ${className}`;
      return (
        <Icon alt="ClockTimeTwo" className={classNames} {...propsRest}>
          <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M12.5 13H11V7H12.5V11.3L16.2 9.2L17 10.5L12.5 13Z" />

        </Icon>
      );
    };
    ClockTimeTwoIcon.displayName = 'ClockTimeTwoIcon';
      