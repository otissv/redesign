import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TableChairIcon: FC<IconInterface> = function TableChairIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TableChairIcon ${className}`;
      return (
        <Icon alt="TableChair" className={classNames} {...propsRest}>
          <path d="M12 22H6A2 2 0 0 1 8 20V8H2V5H16V8H10V20A2 2 0 0 1 12 22M22 2V22H20V15H15V22H13V14A2 2 0 0 1 15 12H20V2Z" />

        </Icon>
      );
    };
    TableChairIcon.displayName = 'TableChairIcon';
      