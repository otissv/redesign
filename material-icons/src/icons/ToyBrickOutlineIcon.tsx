import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ToyBrickOutlineIcon: FC<IconInterface> = function ToyBrickOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ToyBrickOutlineIcon ${className}`;
      return (
        <Icon alt="ToyBrickOutline" className={classNames} {...propsRest}>
          <path d="M19 6V5A2 2 0 0 0 17 3H15A2 2 0 0 0 13 5V6H11V5A2 2 0 0 0 9 3H7A2 2 0 0 0 5 5V6H3V20H21V6M19 18H5V8H19Z" />

        </Icon>
      );
    };
    ToyBrickOutlineIcon.displayName = 'ToyBrickOutlineIcon';
      