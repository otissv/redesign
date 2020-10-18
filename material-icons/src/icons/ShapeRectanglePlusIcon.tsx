import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ShapeRectanglePlusIcon: FC<IconInterface> = function ShapeRectanglePlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ShapeRectanglePlusIcon ${className}`;
      return (
        <Icon alt="ShapeRectanglePlus" className={classNames} {...propsRest}>
          <path d="M19,6H22V8H19V11H17V8H14V6H17V3H19V6M17,17V14H19V19H3V6H11V8H5V17H17Z" />

        </Icon>
      );
    };
    ShapeRectanglePlusIcon.displayName = 'ShapeRectanglePlusIcon';
      