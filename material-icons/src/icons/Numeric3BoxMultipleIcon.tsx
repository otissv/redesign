import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const Numeric3BoxMultipleIcon: FC<IconInterface> = function Numeric3BoxMultipleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric3BoxMultipleIcon ${className}`;
      return (
        <Icon alt="Numeric3BoxMultiple" className={classNames} {...propsRest}>
          <path d="M3,5V21H19V23H3A2,2 0 0,1 1,21V5H3M17,13V11.5A1.5,1.5 0 0,0 15.5,10A1.5,1.5 0 0,0 17,8.5V7C17,5.89 16.1,5 15,5H11V7H15V9H13V11H15V13H11V15H15A2,2 0 0,0 17,13M21,1A2,2 0 0,1 23,3V17A2,2 0 0,1 21,19H7A2,2 0 0,1 5,17V3A2,2 0 0,1 7,1H21Z" />

        </Icon>
      );
    };
    Numeric3BoxMultipleIcon.displayName = 'Numeric3BoxMultipleIcon';
      