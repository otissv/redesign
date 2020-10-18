import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const StairsBoxIcon: FC<IconInterface> = function StairsBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `StairsBoxIcon ${className}`;
      return (
        <Icon alt="StairsBox" className={classNames} {...propsRest}>
          <path d="M5 3C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3H5M14 7H19V9H16V12H13V15H10V18H5V16H8V13H11V10H14V7Z" />

        </Icon>
      );
    };
    StairsBoxIcon.displayName = 'StairsBoxIcon';
      