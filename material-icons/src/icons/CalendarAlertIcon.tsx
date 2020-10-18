import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CalendarAlertIcon: FC<IconInterface> = function CalendarAlertIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CalendarAlertIcon ${className}`;
      return (
        <Icon alt="CalendarAlert" className={classNames} {...propsRest}>
          <path d="M6 1V3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3H18V1H16V3H8V1H6M5 8H19V19H5V7M11 9V14H13V9H11M11 16V18H13V16H11Z" />

        </Icon>
      );
    };
    CalendarAlertIcon.displayName = 'CalendarAlertIcon';
      