import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ShapeSquarePlusIcon: FC<IconInterface> = function ShapeSquarePlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ShapeSquarePlusIcon ${className}`;
      return (
        <Icon alt="ShapeSquarePlus" className={classNames} {...propsRest}>
          <path d="M19,5H22V7H19V10H17V7H14V5H17V2H19V5M17,19V13H19V21H3V5H11V7H5V19H17Z" />

        </Icon>
      );
    };
    ShapeSquarePlusIcon.displayName = 'ShapeSquarePlusIcon';
      