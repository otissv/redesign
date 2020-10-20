import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CalendarImportIcon: FC<IconInterface> = function CalendarImportIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CalendarImportIcon ${className}`;
      return (
        <Icon alt="CalendarImport" className={classNames} {...propsRest}>
          <path d="M12,12L8,16H11V22H13V16H16M19,4H18V2H16V4H8V2H6V4H5A2,2 0 0,0 3,6V20A2,2 0 0,0 5,22H9V20H5V9H19V20H15V22H19A2,2 0 0,0 21,20V6A2,2 0 0,0 19,4Z" />

        </Icon>
      );
    };
    CalendarImportIcon.displayName = 'CalendarImportIcon';
      