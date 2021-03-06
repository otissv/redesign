import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const Numeric2BoxMultipleOutlineIcon: FC<IconInterface> = function Numeric2BoxMultipleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric2BoxMultipleOutlineIcon ${className}`;
      return (
        <Icon alt="Numeric2BoxMultipleOutline" className={classNames} {...propsRest}>
          <path d="M17,13H13V11H15A2,2 0 0,0 17,9V7C17,5.89 16.1,5 15,5H11V7H15V9H13A2,2 0 0,0 11,11V15H17M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M3,5H1V21A2,2 0 0,0 3,23H19V21H3V5Z" />

        </Icon>
      );
    };
    Numeric2BoxMultipleOutlineIcon.displayName = 'Numeric2BoxMultipleOutlineIcon';
      