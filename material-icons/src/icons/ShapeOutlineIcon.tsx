import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ShapeOutlineIcon: FC<IconInterface> = function ShapeOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ShapeOutlineIcon ${className}`;
      return (
        <Icon alt="ShapeOutline" className={classNames} {...propsRest}>
          <path d="M11,13.5V21.5H3V13.5H11M9,15.5H5V19.5H9V15.5M12,2L17.5,11H6.5L12,2M12,5.86L10.08,9H13.92L12,5.86M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13M17.5,15A2.5,2.5 0 0,0 15,17.5A2.5,2.5 0 0,0 17.5,20A2.5,2.5 0 0,0 20,17.5A2.5,2.5 0 0,0 17.5,15Z" />

        </Icon>
      );
    };
    ShapeOutlineIcon.displayName = 'ShapeOutlineIcon';
      