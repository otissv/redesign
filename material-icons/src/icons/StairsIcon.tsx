import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const StairsIcon: FC<IconInterface> = function StairsIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `StairsIcon ${className}`;
      return (
        <Icon alt="Stairs" className={classNames} {...propsRest}>
          <path d="M15,5V9H11V13H7V17H3V20H10V16H14V12H18V8H22V5H15Z" />

        </Icon>
      );
    };
    StairsIcon.displayName = 'StairsIcon';
      