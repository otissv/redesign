import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ClockTimeThreeIcon: FC<IconInterface> = function ClockTimeThreeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ClockTimeThreeIcon ${className}`;
      return (
        <Icon alt="ClockTimeThree" className={classNames} {...propsRest}>
          <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M17 13H11V7H12.5V11.5H17V13Z" />

        </Icon>
      );
    };
    ClockTimeThreeIcon.displayName = 'ClockTimeThreeIcon';
      