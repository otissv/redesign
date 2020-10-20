import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CalendarStarIcon: FC<IconInterface> = function CalendarStarIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CalendarStarIcon ${className}`;
      return (
        <Icon alt="CalendarStar" className={classNames} {...propsRest}>
          <path d="M19,20H5V9H19M16,2V4H8V2H6V4H5A2,2 0 0,0 3,6V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V6A2,2 0 0,0 19,4H18V2M10.88,13H7.27L10.19,15.11L9.08,18.56L12,16.43L14.92,18.56L13.8,15.12L16.72,13H13.12L12,9.56L10.88,13Z" />

        </Icon>
      );
    };
    CalendarStarIcon.displayName = 'CalendarStarIcon';
      