import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CardOutlineIcon: FC<IconInterface> = function CardOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CardOutlineIcon ${className}`;
      return (
        <Icon alt="CardOutline" className={classNames} {...propsRest}>
          <path d="M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M4,6V18H20V6H4Z" />

        </Icon>
      );
    };
    CardOutlineIcon.displayName = 'CardOutlineIcon';
      