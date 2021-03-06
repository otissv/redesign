import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ClockAlertIcon: FC<IconInterface> = function ClockAlertIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ClockAlertIcon ${className}`;
      return (
        <Icon alt="ClockAlert" className={classNames} {...propsRest}>
          <path d="M12,2C16.46,2 20.26,4.95 21.54,9H18V20C16.33,21.25 14.25,22 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M16.2,16.2L17,14.9L12.5,12.2V7H11V13L16.2,16.2M20,11H22V18H20V11M20,20H22V22H20V20Z" />

        </Icon>
      );
    };
    ClockAlertIcon.displayName = 'ClockAlertIcon';
      