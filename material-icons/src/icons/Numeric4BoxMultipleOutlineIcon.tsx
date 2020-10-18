import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const Numeric4BoxMultipleOutlineIcon: FC<IconInterface> = function Numeric4BoxMultipleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric4BoxMultipleOutlineIcon ${className}`;
      return (
        <Icon alt="Numeric4BoxMultipleOutline" className={classNames} {...propsRest}>
          <path d="M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M15,15H17V5H15V9H13V5H11V11H15M3,5H1V21A2,2 0 0,0 3,23H19V21H3V5Z" />

        </Icon>
      );
    };
    Numeric4BoxMultipleOutlineIcon.displayName = 'Numeric4BoxMultipleOutlineIcon';
      