import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const Numeric0BoxIcon: FC<IconInterface> = function Numeric0BoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric0BoxIcon ${className}`;
      return (
        <Icon alt="Numeric0Box" className={classNames} {...propsRest}>
          <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M11,7A2,2 0 0,0 9,9V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V9A2,2 0 0,0 13,7H11M11,9H13V15H11V9Z" />

        </Icon>
      );
    };
    Numeric0BoxIcon.displayName = 'Numeric0BoxIcon';
      