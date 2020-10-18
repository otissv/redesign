import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SortAscendingIcon: FC<IconInterface> = function SortAscendingIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SortAscendingIcon ${className}`;
      return (
        <Icon alt="SortAscending" className={classNames} {...propsRest}>
          <path d="M19 17H22L18 21L14 17H17V3H19M2 17H12V19H2M6 5V7H2V5M2 11H9V13H2V11Z" />

        </Icon>
      );
    };
    SortAscendingIcon.displayName = 'SortAscendingIcon';
      