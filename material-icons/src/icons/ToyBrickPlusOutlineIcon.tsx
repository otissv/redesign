import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ToyBrickPlusOutlineIcon: FC<IconInterface> = function ToyBrickPlusOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ToyBrickPlusOutlineIcon ${className}`;
      return (
        <Icon alt="ToyBrickPlusOutline" className={classNames} {...propsRest}>
          <path d="M19 6V5A2 2 0 0 0 17 3H15A2 2 0 0 0 13 5V6H11V5A2 2 0 0 0 9 3H7A2 2 0 0 0 5 5V6H3V20H14V18H5V8H19V13H21V6M21 15V18H24V20H21V23H19V20H16V18H19V15Z" />

        </Icon>
      );
    };
    ToyBrickPlusOutlineIcon.displayName = 'ToyBrickPlusOutlineIcon';
      