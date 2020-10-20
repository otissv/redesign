import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ViewCompactIcon: FC<IconInterface> = function ViewCompactIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewCompactIcon ${className}`;
      return (
        <Icon alt="ViewCompact" className={classNames} {...propsRest}>
          <path d="M3,19H9V12H3V19M10,19H22V12H10V19M3,5V11H22V5H3Z" />

        </Icon>
      );
    };
    ViewCompactIcon.displayName = 'ViewCompactIcon';
      