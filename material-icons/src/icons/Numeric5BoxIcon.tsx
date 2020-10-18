import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const Numeric5BoxIcon: FC<IconInterface> = function Numeric5BoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric5BoxIcon ${className}`;
      return (
        <Icon alt="Numeric5Box" className={classNames} {...propsRest}>
          <path d="M15,9H11V11H13A2,2 0 0,1 15,13V15C15,16.11 14.1,17 13,17H9V15H13V13H9V7H15M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" />

        </Icon>
      );
    };
    Numeric5BoxIcon.displayName = 'Numeric5BoxIcon';
      