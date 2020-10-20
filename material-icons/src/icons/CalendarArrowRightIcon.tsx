import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CalendarArrowRightIcon: FC<IconInterface> = function CalendarArrowRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CalendarArrowRightIcon ${className}`;
      return (
        <Icon alt="CalendarArrowRight" className={classNames} {...propsRest}>
          <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3M19 19H5V8H19V19M12 17V15H8V12H12V10L16 13.5L12 17Z" />

        </Icon>
      );
    };
    CalendarArrowRightIcon.displayName = 'CalendarArrowRightIcon';
      