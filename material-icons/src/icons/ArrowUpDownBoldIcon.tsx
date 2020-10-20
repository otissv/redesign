import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowUpDownBoldIcon: FC<IconInterface> = function ArrowUpDownBoldIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowUpDownBoldIcon ${className}`;
      return (
        <Icon alt="ArrowUpDownBold" className={classNames} {...propsRest}>
          <path d="M10,8H6L12,2L18,8H14V16H18L12,22L6,16H10V8Z" />

        </Icon>
      );
    };
    ArrowUpDownBoldIcon.displayName = 'ArrowUpDownBoldIcon';
      