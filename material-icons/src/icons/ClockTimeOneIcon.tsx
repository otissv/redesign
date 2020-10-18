import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ClockTimeOneIcon: FC<IconInterface> = function ClockTimeOneIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ClockTimeOneIcon ${className}`;
      return (
        <Icon alt="ClockTimeOne" className={classNames} {...propsRest}>
          <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M12.3 13H11V7H12.5V9.7L14 7.1L15.3 7.9L12.3 13Z" />

        </Icon>
      );
    };
    ClockTimeOneIcon.displayName = 'ClockTimeOneIcon';
      