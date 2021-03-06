import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowUpDownIcon: FC<IconInterface> = function ArrowUpDownIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowUpDownIcon ${className}`;
      return (
        <Icon alt="ArrowUpDown" className={classNames} {...propsRest}>
          <path d="M17.45,17.55L12,23L6.55,17.55L7.96,16.14L11,19.17V4.83L7.96,7.86L6.55,6.45L12,1L17.45,6.45L16.04,7.86L13,4.83V19.17L16.04,16.14L17.45,17.55Z" />

        </Icon>
      );
    };
    ArrowUpDownIcon.displayName = 'ArrowUpDownIcon';
      