import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ViewModuleOutlineIcon: FC<IconInterface> = function ViewModuleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewModuleOutlineIcon ${className}`;
      return (
        <Icon alt="ViewModuleOutline" className={classNames} {...propsRest}>
          <path d="M4 5V18H21V5H4M14 7V10.5H11V7H14M6 7H9V10.5H6V7M6 16V12.5H9V16H6M11 16V12.5H14V16H11M19 16H16V12.5H19V16M16 10.5V7H19V10.5H16Z" />

        </Icon>
      );
    };
    ViewModuleOutlineIcon.displayName = 'ViewModuleOutlineIcon';
      