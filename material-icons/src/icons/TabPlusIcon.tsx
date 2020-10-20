import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TabPlusIcon: FC<IconInterface> = function TabPlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TabPlusIcon ${className}`;
      return (
        <Icon alt="TabPlus" className={classNames} {...propsRest}>
          <path d="M3,3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3H3M3,5H13V9H21V19H3V5M10,10V13H7V15H10V18H12V15H15V13H12V10H10Z" />

        </Icon>
      );
    };
    TabPlusIcon.displayName = 'TabPlusIcon';
      