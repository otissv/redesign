import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const Numeric4BoxMultipleIcon: FC<IconInterface> = function Numeric4BoxMultipleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric4BoxMultipleIcon ${className}`;
      return (
        <Icon alt="Numeric4BoxMultiple" className={classNames} {...propsRest}>
          <path d="M3,5V21H19V23H3A2,2 0 0,1 1,21V5H3M21,1A2,2 0 0,1 23,3V17A2,2 0 0,1 21,19H7A2,2 0 0,1 5,17V3A2,2 0 0,1 7,1H21M15,15H17V5H15V9H13V5H11V11H15V15Z" />

        </Icon>
      );
    };
    Numeric4BoxMultipleIcon.displayName = 'Numeric4BoxMultipleIcon';
      