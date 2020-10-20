import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BorderAllIcon: FC<IconInterface> = function BorderAllIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BorderAllIcon ${className}`;
      return (
        <Icon alt="BorderAll" className={classNames} {...propsRest}>
          <path d="M19,11H13V5H19M19,19H13V13H19M11,11H5V5H11M11,19H5V13H11M3,21H21V3H3V21Z" />

        </Icon>
      );
    };
    BorderAllIcon.displayName = 'BorderAllIcon';
      