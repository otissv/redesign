import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const EllipseIcon: FC<IconInterface> = function EllipseIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `EllipseIcon ${className}`;
      return (
        <Icon alt="Ellipse" className={classNames} {...propsRest}>
          <path d="M12,4C6.5,4 2,7.58 2,12C2,16.42 6.5,20 12,20C17.5,20 22,16.42 22,12C22,7.58 17.5,4 12,4Z" />

        </Icon>
      );
    };
    EllipseIcon.displayName = 'EllipseIcon';
      