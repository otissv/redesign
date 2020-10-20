import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SortAlphabeticalAscendingIcon: FC<IconInterface> = function SortAlphabeticalAscendingIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SortAlphabeticalAscendingIcon ${className}`;
      return (
        <Icon alt="SortAlphabeticalAscending" className={classNames} {...propsRest}>
          <path d="M19 17H22L18 21L14 17H17V3H19M11 13V15L7.67 19H11V21H5V19L8.33 15H5V13M9 3H7C5.9 3 5 3.9 5 5V11H7V9H9V11H11V5C11 3.9 10.11 3 9 3M9 7H7V5H9Z" />

        </Icon>
      );
    };
    SortAlphabeticalAscendingIcon.displayName = 'SortAlphabeticalAscendingIcon';
      