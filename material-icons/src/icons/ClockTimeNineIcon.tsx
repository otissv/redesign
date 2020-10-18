import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ClockTimeNineIcon: FC<IconInterface> = function ClockTimeNineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ClockTimeNineIcon ${className}`;
      return (
        <Icon alt="ClockTimeNine" className={classNames} {...propsRest}>
          <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M12.5 13H7V11.5H11V7H12.5V13Z" />

        </Icon>
      );
    };
    ClockTimeNineIcon.displayName = 'ClockTimeNineIcon';
      