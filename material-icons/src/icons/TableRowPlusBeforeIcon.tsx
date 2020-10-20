import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TableRowPlusBeforeIcon: FC<IconInterface> = function TableRowPlusBeforeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TableRowPlusBeforeIcon ${className}`;
      return (
        <Icon alt="TableRowPlusBefore" className={classNames} {...propsRest}>
          <path d="M22,14A2,2 0 0,0 20,12H4A2,2 0 0,0 2,14V21H4V19H8V21H10V19H14V21H16V19H20V21H22V14M4,14H8V17H4V14M10,14H14V17H10V14M20,14V17H16V14H20M11,10H13V7H16V5H13V2H11V5H8V7H11V10Z" />

        </Icon>
      );
    };
    TableRowPlusBeforeIcon.displayName = 'TableRowPlusBeforeIcon';
      