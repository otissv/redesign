import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const Numeric9BoxMultipleIcon: FC<IconInterface> = function Numeric9BoxMultipleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric9BoxMultipleIcon ${className}`;
      return (
        <Icon alt="Numeric9BoxMultiple" className={classNames} {...propsRest}>
          <path d="M15,9H13V7H15V9M3,5V21H19V23H3A2,2 0 0,1 1,21V5H3M15,5H13A2,2 0 0,0 11,7V9C11,10.11 11.9,11 13,11H15V13H11V15H15A2,2 0 0,0 17,13V7C17,5.89 16.1,5 15,5M21,1A2,2 0 0,1 23,3V17A2,2 0 0,1 21,19H7A2,2 0 0,1 5,17V3A2,2 0 0,1 7,1H21Z" />

        </Icon>
      );
    };
    Numeric9BoxMultipleIcon.displayName = 'Numeric9BoxMultipleIcon';
      