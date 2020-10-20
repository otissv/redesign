import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CalendarRangeIcon: FC<IconInterface> = function CalendarRangeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CalendarRangeIcon ${className}`;
      return (
        <Icon alt="CalendarRange" className={classNames} {...propsRest}>
          <path d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z" />

        </Icon>
      );
    };
    CalendarRangeIcon.displayName = 'CalendarRangeIcon';
      