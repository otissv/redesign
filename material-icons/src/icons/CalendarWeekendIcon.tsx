import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CalendarWeekendIcon: FC<IconInterface> = function CalendarWeekendIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CalendarWeekendIcon ${className}`;
      return (
        <Icon alt="CalendarWeekend" className={classNames} {...propsRest}>
          <path d="M19,20V9H5V20H19M16,2H18V4H19A2,2 0 0,1 21,6V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V6A2,2 0 0,1 5,4H6V2H8V4H16V2M7,18V11H9V18H7M15,11H17V18H15V11Z" />

        </Icon>
      );
    };
    CalendarWeekendIcon.displayName = 'CalendarWeekendIcon';
      