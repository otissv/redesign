import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ClockTimeTenIcon: FC<IconInterface> = function ClockTimeTenIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ClockTimeTenIcon ${className}`;
      return (
        <Icon alt="ClockTimeTen" className={classNames} {...propsRest}>
          <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M12.5 13H11L7 10.7L7.8 9.4L11.1 11.3V7H12.6V13Z" />

        </Icon>
      );
    };
    ClockTimeTenIcon.displayName = 'ClockTimeTenIcon';
      