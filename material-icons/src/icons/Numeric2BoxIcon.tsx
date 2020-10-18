import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const Numeric2BoxIcon: FC<IconInterface> = function Numeric2BoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric2BoxIcon ${className}`;
      return (
        <Icon alt="Numeric2Box" className={classNames} {...propsRest}>
          <path d="M15,11C15,12.11 14.1,13 13,13H11V15H15V17H9V13C9,11.89 9.9,11 11,11H13V9H9V7H13A2,2 0 0,1 15,9M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" />

        </Icon>
      );
    };
    Numeric2BoxIcon.displayName = 'Numeric2BoxIcon';
      