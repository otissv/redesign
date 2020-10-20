import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const Numeric1BoxIcon: FC<IconInterface> = function Numeric1BoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric1BoxIcon ${className}`;
      return (
        <Icon alt="Numeric1Box" className={classNames} {...propsRest}>
          <path d="M14,17H12V9H10V7H14M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" />

        </Icon>
      );
    };
    Numeric1BoxIcon.displayName = 'Numeric1BoxIcon';
      