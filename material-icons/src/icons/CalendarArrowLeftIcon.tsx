import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CalendarArrowLeftIcon: FC<IconInterface> = function CalendarArrowLeftIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CalendarArrowLeftIcon ${className}`;
      return (
        <Icon alt="CalendarArrowLeft" className={classNames} {...propsRest}>
          <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3M19 19H5V8H19V19M12 10V12H16V15H12V17L8 13.5L12 10Z" />

        </Icon>
      );
    };
    CalendarArrowLeftIcon.displayName = 'CalendarArrowLeftIcon';
      