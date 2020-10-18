import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ShapePolygonPlusIcon: FC<IconInterface> = function ShapePolygonPlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ShapePolygonPlusIcon ${className}`;
      return (
        <Icon alt="ShapePolygonPlus" className={classNames} {...propsRest}>
          <path d="M17,15.7V13H19V17L10,21L3,14L7,5H11V7H8.3L5.4,13.6L10.4,18.6L17,15.7M22,5V7H19V10H17V7H14V5H17V2H19V5H22Z" />

        </Icon>
      );
    };
    ShapePolygonPlusIcon.displayName = 'ShapePolygonPlusIcon';
      