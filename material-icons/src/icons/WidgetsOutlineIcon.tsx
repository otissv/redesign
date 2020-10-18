import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const WidgetsOutlineIcon: FC<IconInterface> = function WidgetsOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `WidgetsOutlineIcon ${className}`;
      return (
        <Icon alt="WidgetsOutline" className={classNames} {...propsRest}>
          <path d="M16.7 4.5L19.5 7.3L16.7 10.1L13.9 7.3L16.7 4.5M9 5V9H5V5H9M19 15V19H15V15H19M16.7 1.7L11 7.3L16.7 13H13V21H21V13H16.7L22.3 7.3L16.7 1.7M11 3H3V11H11V3M9 15V19H5V15H9M11 13H3V21H11V13Z" />

        </Icon>
      );
    };
    WidgetsOutlineIcon.displayName = 'WidgetsOutlineIcon';
      