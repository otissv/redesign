import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const Numeric5BoxMultipleIcon: FC<IconInterface> = function Numeric5BoxMultipleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric5BoxMultipleIcon ${className}`;
      return (
        <Icon alt="Numeric5BoxMultiple" className={classNames} {...propsRest}>
          <path d="M3,5V21H19V23H3A2,2 0 0,1 1,21V5H3M21,1A2,2 0 0,1 23,3V17A2,2 0 0,1 21,19H7A2,2 0 0,1 5,17V3A2,2 0 0,1 7,1H21M17,13V11C17,9.89 16.1,9 15,9H13V7H17V5H11V11H15V13H11V15H15A2,2 0 0,0 17,13Z" />

        </Icon>
      );
    };
    Numeric5BoxMultipleIcon.displayName = 'Numeric5BoxMultipleIcon';
      