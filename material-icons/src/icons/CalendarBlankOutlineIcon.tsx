import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CalendarBlankOutlineIcon: FC<IconInterface> = function CalendarBlankOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CalendarBlankOutlineIcon ${className}`;
      return (
        <Icon alt="CalendarBlankOutline" className={classNames} {...propsRest}>
          <path d="M19,4H18V2H16V4H8V2H6V4H5C3.89,4 3,4.9 3,6V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V6A2,2 0 0,0 19,4M19,20H5V10H19V20M19,8H5V6H19V8Z" />

        </Icon>
      );
    };
    CalendarBlankOutlineIcon.displayName = 'CalendarBlankOutlineIcon';
      