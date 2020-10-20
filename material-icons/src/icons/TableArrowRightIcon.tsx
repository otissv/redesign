import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TableArrowRightIcon: FC<IconInterface> = function TableArrowRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TableArrowRightIcon ${className}`;
      return (
        <Icon alt="TableArrowRight" className={classNames} {...propsRest}>
          <path d="M4 3H18C19.11 3 20 3.9 20 5V12.08C18.45 11.82 16.92 12.18 15.68 13H12V17H13.08C12.97 17.68 12.97 18.35 13.08 19H4C2.9 19 2 18.11 2 17V5C2 3.9 2.9 3 4 3M4 7V11H10V7H4M12 7V11H18V7H12M4 13V17H10V13H4M19.44 21V19H15.44V17H19.44V15L22.44 18L19.44 21" />

        </Icon>
      );
    };
    TableArrowRightIcon.displayName = 'TableArrowRightIcon';
      