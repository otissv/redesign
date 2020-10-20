import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SortNumericAscendingIcon: FC<IconInterface> = function SortNumericAscendingIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SortNumericAscendingIcon ${className}`;
      return (
        <Icon alt="SortNumericAscending" className={classNames} {...propsRest}>
          <path d="M19 17H22L18 21L14 17H17V3H19V17M9 13H7C5.9 13 5 13.9 5 15V16C5 17.11 5.9 18 7 18H9V19H5V21H9C10.11 21 11 20.11 11 19V15C11 13.9 10.11 13 9 13M9 16H7V15H9V16M9 3H7C5.9 3 5 3.9 5 5V9C5 10.11 5.9 11 7 11H9C10.11 11 11 10.11 11 9V5C11 3.9 10.11 3 9 3M9 9H7V5H9V9Z" />

        </Icon>
      );
    };
    SortNumericAscendingIcon.displayName = 'SortNumericAscendingIcon';
      