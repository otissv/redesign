import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SortDescendingIcon: FC<IconInterface> = function SortDescendingIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SortDescendingIcon ${className}`;
      return (
        <Icon alt="SortDescending" className={classNames} {...propsRest}>
          <path d="M19 7H22L18 3L14 7H17V21H19M2 17H12V19H2M6 5V7H2V5M2 11H9V13H2V11Z" />

        </Icon>
      );
    };
    SortDescendingIcon.displayName = 'SortDescendingIcon';
      