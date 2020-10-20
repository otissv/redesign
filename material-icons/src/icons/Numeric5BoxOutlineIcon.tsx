import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const Numeric5BoxOutlineIcon: FC<IconInterface> = function Numeric5BoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric5BoxOutlineIcon ${className}`;
      return (
        <Icon alt="Numeric5BoxOutline" className={classNames} {...propsRest}>
          <path d="M15,15V13C15,11.89 14.1,11 13,11H11V9H15V7H9V13H13V15H9V17H13A2,2 0 0,0 15,15M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" />

        </Icon>
      );
    };
    Numeric5BoxOutlineIcon.displayName = 'Numeric5BoxOutlineIcon';
      