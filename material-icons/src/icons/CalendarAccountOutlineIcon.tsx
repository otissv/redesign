import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CalendarAccountOutlineIcon: FC<IconInterface> = function CalendarAccountOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CalendarAccountOutlineIcon ${className}`;
      return (
        <Icon alt="CalendarAccountOutline" className={classNames} {...propsRest}>
          <path d="M19,4H18V2H16V4H8V2H6V4H5A2,2 0 0,0 3,6V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V6A2,2 0 0,0 19,4M19,20H5V10H19V20M19,8H5V6H19M12,11C14,11 15,13.42 13.59,14.84C12.17,16.26 9.75,15.25 9.75,13.25C9.75,12 10.75,11 12,11M16.5,18.88V19H7.5V18.88C7.5,17.63 9.5,16.63 12,16.63C14.5,16.63 16.5,17.63 16.5,18.88Z" />

        </Icon>
      );
    };
    CalendarAccountOutlineIcon.displayName = 'CalendarAccountOutlineIcon';
      