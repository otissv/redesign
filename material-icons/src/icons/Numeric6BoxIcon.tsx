import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const Numeric6BoxIcon: FC<IconInterface> = function Numeric6BoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric6BoxIcon ${className}`;
      return (
        <Icon alt="Numeric6Box" className={classNames} {...propsRest}>
          <path d="M15,9H11V11H13A2,2 0 0,1 15,13V15C15,16.11 14.1,17 13,17H11A2,2 0 0,1 9,15V9C9,7.89 9.9,7 11,7H15M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M11,15H13V13H11V15Z" />

        </Icon>
      );
    };
    Numeric6BoxIcon.displayName = 'Numeric6BoxIcon';
      