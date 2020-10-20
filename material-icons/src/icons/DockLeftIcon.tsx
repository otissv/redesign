import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const DockLeftIcon: FC<IconInterface> = function DockLeftIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DockLeftIcon ${className}`;
      return (
        <Icon alt="DockLeft" className={classNames} {...propsRest}>
          <path d="M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z" />

        </Icon>
      );
    };
    DockLeftIcon.displayName = 'DockLeftIcon';
      