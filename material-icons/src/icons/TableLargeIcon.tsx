import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TableLargeIcon: FC<IconInterface> = function TableLargeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TableLargeIcon ${className}`;
      return (
        <Icon alt="TableLarge" className={classNames} {...propsRest}>
          <path d="M4,3H20A2,2 0 0,1 22,5V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V5A2,2 0 0,1 4,3M4,7V10H8V7H4M10,7V10H14V7H10M20,10V7H16V10H20M4,12V15H8V12H4M4,20H8V17H4V20M10,12V15H14V12H10M10,20H14V17H10V20M20,20V17H16V20H20M20,12H16V15H20V12Z" />

        </Icon>
      );
    };
    TableLargeIcon.displayName = 'TableLargeIcon';
      