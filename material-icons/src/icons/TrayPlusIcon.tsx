import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const TrayPlusIcon: FC<IconInterface> = function TrayPlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TrayPlusIcon ${className}`;
      return (
        <Icon alt="TrayPlus" className={classNames} {...propsRest}>
          <path d="M2 12H4V17H20V12H22V17A2 2 0 0 1 20 19H4A2 2 0 0 1 2 17M11 5H13V8H16V10H13V13H11V10H8V8H11Z" />

        </Icon>
      );
    };
    TrayPlusIcon.displayName = 'TrayPlusIcon';
      