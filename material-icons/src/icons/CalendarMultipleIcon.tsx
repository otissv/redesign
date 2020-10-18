import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CalendarMultipleIcon: FC<IconInterface> = function CalendarMultipleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CalendarMultipleIcon ${className}`;
      return (
        <Icon alt="CalendarMultiple" className={classNames} {...propsRest}>
          <path d="M21,17V8H7V17H21M21,3A2,2 0 0,1 23,5V17A2,2 0 0,1 21,19H7C5.89,19 5,18.1 5,17V5A2,2 0 0,1 7,3H8V1H10V3H18V1H20V3H21M3,21H17V23H3C1.89,23 1,22.1 1,21V9H3V21M19,15H15V11H19V15Z" />

        </Icon>
      );
    };
    CalendarMultipleIcon.displayName = 'CalendarMultipleIcon';
      