import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BorderStyleIcon: FC<IconInterface> = function BorderStyleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BorderStyleIcon ${className}`;
      return (
        <Icon alt="BorderStyle" className={classNames} {...propsRest}>
          <path d="M15,21H17V19H15M19,21H21V19H19M7,21H9V19H7M11,21H13V19H11M19,17H21V15H19M19,13H21V11H19M3,3V21H5V5H21V3M19,9H21V7H19" />

        </Icon>
      );
    };
    BorderStyleIcon.displayName = 'BorderStyleIcon';
      