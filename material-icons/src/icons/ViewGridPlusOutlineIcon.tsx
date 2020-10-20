import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ViewGridPlusOutlineIcon: FC<IconInterface> = function ViewGridPlusOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewGridPlusOutlineIcon ${className}`;
      return (
        <Icon alt="ViewGridPlusOutline" className={classNames} {...propsRest}>
          <path d="M3 21H11V13H3M5 15H9V19H5M3 11H11V3H3M5 5H9V9H5M13 3V11H21V3M19 9H15V5H19M18 16H21V18H18V21H16V18H13V16H16V13H18Z" />

        </Icon>
      );
    };
    ViewGridPlusOutlineIcon.displayName = 'ViewGridPlusOutlineIcon';
      