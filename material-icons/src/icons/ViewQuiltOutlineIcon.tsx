import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ViewQuiltOutlineIcon: FC<IconInterface> = function ViewQuiltOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewQuiltOutlineIcon ${className}`;
      return (
        <Icon alt="ViewQuiltOutline" className={classNames} {...propsRest}>
          <path d="M4 5V18H21V5H4M6 16V7H9V16H6M11 16V12.5H14V16H11M19 16H16V12.5H19V16M11 10.5V7H19V10.5H11Z" />

        </Icon>
      );
    };
    ViewQuiltOutlineIcon.displayName = 'ViewQuiltOutlineIcon';
      