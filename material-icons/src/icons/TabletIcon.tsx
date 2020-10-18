import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const TabletIcon: FC<IconInterface> = function TabletIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TabletIcon ${className}`;
      return (
        <Icon alt="Tablet" className={classNames} {...propsRest}>
          <path d="M19,18H5V6H19M21,4H3C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18V6C23,4.89 22.1,4 21,4Z" />

        </Icon>
      );
    };
    TabletIcon.displayName = 'TabletIcon';
      