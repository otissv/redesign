import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const TabIcon: FC<IconInterface> = function TabIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TabIcon ${className}`;
      return (
        <Icon alt="Tab" className={classNames} {...propsRest}>
          <path d="M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H13V9H21V19Z" />

        </Icon>
      );
    };
    TabIcon.displayName = 'TabIcon';
      