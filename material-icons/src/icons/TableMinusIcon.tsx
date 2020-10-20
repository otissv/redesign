import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TableMinusIcon: FC<IconInterface> = function TableMinusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TableMinusIcon ${className}`;
      return (
        <Icon alt="TableMinus" className={classNames} {...propsRest}>
          <path d="M15 19V17H23V19H15M4 3H18C19.11 3 20 3.9 20 5V12.08C18.45 11.82 16.92 12.18 15.68 13H12V17H13.08C12.97 17.68 12.97 18.35 13.08 19H4C2.9 19 2 18.11 2 17V5C2 3.9 2.9 3 4 3M4 7V11H10V7H4M12 7V11H18V7H12M4 13V17H10V13H4Z" />

        </Icon>
      );
    };
    TableMinusIcon.displayName = 'TableMinusIcon';
      