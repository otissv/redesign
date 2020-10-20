import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TableSplitCellIcon: FC<IconInterface> = function TableSplitCellIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TableSplitCellIcon ${className}`;
      return (
        <Icon alt="TableSplitCell" className={classNames} {...propsRest}>
          <path d="M19 14H21V20H3V14H5V18H19V14M3 4V10H5V6H19V10H21V4H3M11 11V13H8V15L5 12L8 9V11H11M16 11V9L19 12L16 15V13H13V11H16Z" />

        </Icon>
      );
    };
    TableSplitCellIcon.displayName = 'TableSplitCellIcon';
      