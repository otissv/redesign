import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const RectangleOutlineIcon: FC<IconInterface> = function RectangleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RectangleOutlineIcon ${className}`;
      return (
        <Icon alt="RectangleOutline" className={classNames} {...propsRest}>
          <path d="M4,6V19H20V6H4M18,17H6V8H18V17Z" />

        </Icon>
      );
    };
    RectangleOutlineIcon.displayName = 'RectangleOutlineIcon';
      