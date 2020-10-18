import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const Numeric4BoxIcon: FC<IconInterface> = function Numeric4BoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric4BoxIcon ${className}`;
      return (
        <Icon alt="Numeric4Box" className={classNames} {...propsRest}>
          <path d="M15,17H13V13H9V7H11V11H13V7H15M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" />

        </Icon>
      );
    };
    Numeric4BoxIcon.displayName = 'Numeric4BoxIcon';
      