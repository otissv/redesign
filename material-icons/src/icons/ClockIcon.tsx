import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ClockIcon: FC<IconInterface> = function ClockIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ClockIcon ${className}`;
      return (
        <Icon alt="Clock" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z" />

        </Icon>
      );
    };
    ClockIcon.displayName = 'ClockIcon';
      