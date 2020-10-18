import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ClockTimeTenOutlineIcon: FC<IconInterface> = function ClockTimeTenOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ClockTimeTenOutlineIcon ${className}`;
      return (
        <Icon alt="ClockTimeTenOutline" className={classNames} {...propsRest}>
          <path d="M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12.5 13H11L7 10.7L7.8 9.4L11.1 11.3V7H12.6V13Z" />

        </Icon>
      );
    };
    ClockTimeTenOutlineIcon.displayName = 'ClockTimeTenOutlineIcon';
      