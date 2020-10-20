import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const Numeric6BoxMultipleIcon: FC<IconInterface> = function Numeric6BoxMultipleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric6BoxMultipleIcon ${className}`;
      return (
        <Icon alt="Numeric6BoxMultiple" className={classNames} {...propsRest}>
          <path d="M13,11H15V13H13V11M3,5V21H19V23H3A2,2 0 0,1 1,21V5H3M21,1A2,2 0 0,1 23,3V17A2,2 0 0,1 21,19H7A2,2 0 0,1 5,17V3A2,2 0 0,1 7,1H21M13,15H15A2,2 0 0,0 17,13V11C17,9.89 16.1,9 15,9H13V7H17V5H13A2,2 0 0,0 11,7V13C11,14.11 11.9,15 13,15Z" />

        </Icon>
      );
    };
    Numeric6BoxMultipleIcon.displayName = 'Numeric6BoxMultipleIcon';
      