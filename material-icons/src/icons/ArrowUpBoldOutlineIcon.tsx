import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowUpBoldOutlineIcon: FC<IconInterface> = function ArrowUpBoldOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowUpBoldOutlineIcon ${className}`;
      return (
        <Icon alt="ArrowUpBoldOutline" className={classNames} {...propsRest}>
          <path d="M16,13V21H8V13H2L12,3L22,13H16M7,11H10V19H14V11H17L12,6L7,11Z" />

        </Icon>
      );
    };
    ArrowUpBoldOutlineIcon.displayName = 'ArrowUpBoldOutlineIcon';
      