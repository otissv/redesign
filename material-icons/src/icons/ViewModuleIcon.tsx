import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ViewModuleIcon: FC<IconInterface> = function ViewModuleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewModuleIcon ${className}`;
      return (
        <Icon alt="ViewModule" className={classNames} {...propsRest}>
          <path d="M16,5V11H21V5M10,11H15V5H10M16,18H21V12H16M10,18H15V12H10M4,18H9V12H4M4,11H9V5H4V11Z" />

        </Icon>
      );
    };
    ViewModuleIcon.displayName = 'ViewModuleIcon';
      