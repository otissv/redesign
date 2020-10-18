import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const TabMinusIcon: FC<IconInterface> = function TabMinusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TabMinusIcon ${className}`;
      return (
        <Icon alt="TabMinus" className={classNames} {...propsRest}>
          <path d="M3,3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3H3M3,5H13V9H21V19H3V5M7,13V15H15V13H7Z" />

        </Icon>
      );
    };
    TabMinusIcon.displayName = 'TabMinusIcon';
      