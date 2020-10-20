import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const EqualBoxIcon: FC<IconInterface> = function EqualBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `EqualBoxIcon ${className}`;
      return (
        <Icon alt="EqualBox" className={classNames} {...propsRest}>
          <path d="M17,16V14H7V16H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19M17,10V8H7V10H17Z" />

        </Icon>
      );
    };
    EqualBoxIcon.displayName = 'EqualBoxIcon';
      