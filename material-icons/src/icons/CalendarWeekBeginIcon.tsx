import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CalendarWeekBeginIcon: FC<IconInterface> = function CalendarWeekBeginIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CalendarWeekBeginIcon ${className}`;
      return (
        <Icon alt="CalendarWeekBegin" className={classNames} {...propsRest}>
          <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M9,10H7V17H9V10Z" />

        </Icon>
      );
    };
    CalendarWeekBeginIcon.displayName = 'CalendarWeekBeginIcon';
      