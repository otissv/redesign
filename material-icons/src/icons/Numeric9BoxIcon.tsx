import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const Numeric9BoxIcon: FC<IconInterface> = function Numeric9BoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric9BoxIcon ${className}`;
      return (
        <Icon alt="Numeric9Box" className={classNames} {...propsRest}>
          <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M13,11H11V9H13V11M13,7H11A2,2 0 0,0 9,9V11C9,12.11 9.9,13 11,13H13V15H9V17H13A2,2 0 0,0 15,15V9C15,7.89 14.1,7 13,7Z" />

        </Icon>
      );
    };
    Numeric9BoxIcon.displayName = 'Numeric9BoxIcon';
      