import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ShapeCirclePlusIcon: FC<IconInterface> = function ShapeCirclePlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ShapeCirclePlusIcon ${className}`;
      return (
        <Icon alt="ShapeCirclePlus" className={classNames} {...propsRest}>
          <path d="M11,19A6,6 0 0,0 17,13H19A8,8 0 0,1 11,21A8,8 0 0,1 3,13A8,8 0 0,1 11,5V7A6,6 0 0,0 5,13A6,6 0 0,0 11,19M19,5H22V7H19V10H17V7H14V5H17V2H19V5Z" />

        </Icon>
      );
    };
    ShapeCirclePlusIcon.displayName = 'ShapeCirclePlusIcon';
      