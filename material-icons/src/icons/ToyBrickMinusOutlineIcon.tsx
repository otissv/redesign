import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ToyBrickMinusOutlineIcon: FC<IconInterface> = function ToyBrickMinusOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ToyBrickMinusOutlineIcon ${className}`;
      return (
        <Icon alt="ToyBrickMinusOutline" className={classNames} {...propsRest}>
          <path d="M19 6V5A2 2 0 0 0 17 3H15A2 2 0 0 0 13 5V6H11V5A2 2 0 0 0 9 3H7A2 2 0 0 0 5 5V6H3V20H14V18H5V8H19V16H21V6M24 20H16V18H24Z" />

        </Icon>
      );
    };
    ToyBrickMinusOutlineIcon.displayName = 'ToyBrickMinusOutlineIcon';
      