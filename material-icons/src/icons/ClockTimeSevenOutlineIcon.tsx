import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ClockTimeSevenOutlineIcon: FC<IconInterface> = function ClockTimeSevenOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ClockTimeSevenOutlineIcon ${className}`;
      return (
        <Icon alt="ClockTimeSevenOutline" className={classNames} {...propsRest}>
          <path d="M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12.5 7V12.2L9.8 17L8.5 16.2L11 11.8V7H12.5Z" />

        </Icon>
      );
    };
    ClockTimeSevenOutlineIcon.displayName = 'ClockTimeSevenOutlineIcon';
      