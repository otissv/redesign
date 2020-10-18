import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MinusBoxMultipleOutlineIcon: FC<IconInterface> = function MinusBoxMultipleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MinusBoxMultipleOutlineIcon ${className}`;
      return (
        <Icon alt="MinusBoxMultipleOutline" className={classNames} {...propsRest}>
          <path d="M18 11H10V9H18M20 4V16H8V4H20M20 2H8C6.9 2 6 2.9 6 4V16C6 17.11 6.9 18 8 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M4 6H2V20C2 21.11 2.9 22 4 22H18V20H4V6Z" />

        </Icon>
      );
    };
    MinusBoxMultipleOutlineIcon.displayName = 'MinusBoxMultipleOutlineIcon';
      