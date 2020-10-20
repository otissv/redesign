import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CollageIcon: FC<IconInterface> = function CollageIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CollageIcon ${className}`;
      return (
        <Icon alt="Collage" className={classNames} {...propsRest}>
          <path d="M5,3C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H11V3M13,3V11H21V5C21,3.89 20.11,3 19,3M13,13V21H19C20.11,21 21,20.11 21,19V13" />

        </Icon>
      );
    };
    CollageIcon.displayName = 'CollageIcon';
      