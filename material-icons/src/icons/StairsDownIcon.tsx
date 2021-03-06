import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const StairsDownIcon: FC<IconInterface> = function StairsDownIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `StairsDownIcon ${className}`;
      return (
        <Icon alt="StairsDown" className={classNames} {...propsRest}>
          <path d="M15 6H22V9H18V13H14V17H10V21H3V18H7V14H11V10H15V6M4.83 8.34L10.34 2.83L12.17 4.66L6.66 10.17L8.5 12H3V6.5L4.83 8.34Z" />

        </Icon>
      );
    };
    StairsDownIcon.displayName = 'StairsDownIcon';
      