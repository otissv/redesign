import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const Numeric9PlusBoxMultipleIcon: FC<IconInterface> = function Numeric9PlusBoxMultipleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric9PlusBoxMultipleIcon ${className}`;
      return (
        <Icon alt="Numeric9PlusBoxMultiple" className={classNames} {...propsRest}>
          <path d="M11,9V8H12V9H11M21,1A2,2 0 0,1 23,3V17A2,2 0 0,1 21,19H7A2,2 0 0,1 5,17V3A2,2 0 0,1 7,1H21M3,5V21H19V23H3A2,2 0 0,1 1,21V5H3M15,9V11H17V13H19V11H21V9H19V7H17V9H15M14,12V8C14,6.89 13.1,6 12,6H11A2,2 0 0,0 9,8V9C9,10.11 9.9,11 11,11H12V12H9V14H12A2,2 0 0,0 14,12Z" />

        </Icon>
      );
    };
    Numeric9PlusBoxMultipleIcon.displayName = 'Numeric9PlusBoxMultipleIcon';
      