import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SortIcon: FC<IconInterface> = function SortIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SortIcon ${className}`;
      return (
        <Icon alt="Sort" className={classNames} {...propsRest}>
          <path d="M18 21L14 17H17V7H14L18 3L22 7H19V17H22M2 19V17H12V19M2 13V11H9V13M2 7V5H6V7H2Z" />

        </Icon>
      );
    };
    SortIcon.displayName = 'SortIcon';
      