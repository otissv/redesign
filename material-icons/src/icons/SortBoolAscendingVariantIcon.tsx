import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SortBoolAscendingVariantIcon: FC<IconInterface> = function SortBoolAscendingVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SortBoolAscendingVariantIcon ${className}`;
      return (
        <Icon alt="SortBoolAscendingVariant" className={classNames} {...propsRest}>
          <path d="M19 17H22L18 21L14 17H17V3H19V17M9 13H5C3.89 13 3 13.89 3 15V19C3 20.11 3.89 21 5 21H9C10.11 21 11 20.11 11 19V15C11 13.89 10.11 13 9 13M6.27 19.5L3.74 16.95L4.81 15.9L6.28 17.39L9.2 14.5L10.26 15.55L6.27 19.5M9 3H5C3.89 3 3 3.89 3 5V9C3 10.11 3.89 11 5 11H9C10.11 11 11 10.11 11 9V5C11 3.89 10.11 3 9 3M9 9H5V5H9V9Z" />

        </Icon>
      );
    };
    SortBoolAscendingVariantIcon.displayName = 'SortBoolAscendingVariantIcon';
      