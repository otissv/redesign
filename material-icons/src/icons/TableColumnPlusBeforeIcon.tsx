import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TableColumnPlusBeforeIcon: FC<IconInterface> = function TableColumnPlusBeforeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TableColumnPlusBeforeIcon ${className}`;
      return (
        <Icon alt="TableColumnPlusBefore" className={classNames} {...propsRest}>
          <path d="M13,2A2,2 0 0,0 11,4V20A2,2 0 0,0 13,22H22V2H13M20,10V14H13V10H20M20,16V20H13V16H20M20,4V8H13V4H20M9,11H6V8H4V11H1V13H4V16H6V13H9V11Z" />

        </Icon>
      );
    };
    TableColumnPlusBeforeIcon.displayName = 'TableColumnPlusBeforeIcon';
      