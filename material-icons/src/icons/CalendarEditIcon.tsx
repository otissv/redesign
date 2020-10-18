import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CalendarEditIcon: FC<IconInterface> = function CalendarEditIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CalendarEditIcon ${className}`;
      return (
        <Icon alt="CalendarEdit" className={classNames} {...propsRest}>
          <path d="M19,3H18V1H16V3H8V1H6V3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H10V19H5V8H19V9H21V5A2,2 0 0,0 19,3M21.7,13.35L20.7,14.35L18.65,12.35L19.65,11.35C19.85,11.14 20.19,11.13 20.42,11.35L21.7,12.63C21.89,12.83 21.89,13.15 21.7,13.35M12,18.94L18.07,12.88L20.12,14.88L14.06,21H12V18.94Z" />

        </Icon>
      );
    };
    CalendarEditIcon.displayName = 'CalendarEditIcon';
      