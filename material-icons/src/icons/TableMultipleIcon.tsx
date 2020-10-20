import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TableMultipleIcon: FC<IconInterface> = function TableMultipleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TableMultipleIcon ${className}`;
      return (
        <Icon alt="TableMultiple" className={classNames} {...propsRest}>
          <path d="M7 2H21C22.11 2 23 2.9 23 4V16C23 17.11 22.11 18 21 18H7C5.9 18 5 17.11 5 16V4C5 2.9 5.9 2 7 2M7 6V10H13V6H7M15 6V10H21V6H15M7 12V16H13V12H7M15 12V16H21V12H15M3 20V6H1V20C1 21.11 1.89 22 3 22H19V20H3Z" />

        </Icon>
      );
    };
    TableMultipleIcon.displayName = 'TableMultipleIcon';
      