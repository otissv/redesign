import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ViewCompactOutlineIcon: FC<IconInterface> = function ViewCompactOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewCompactOutlineIcon ${className}`;
      return (
        <Icon alt="ViewCompactOutline" className={classNames} {...propsRest}>
          <path d="M3,5V19H22V5H3M5,7H20V11H5V7M5,17V13H9V17H5M11,17V13H20V17H11Z" />

        </Icon>
      );
    };
    ViewCompactOutlineIcon.displayName = 'ViewCompactOutlineIcon';
      