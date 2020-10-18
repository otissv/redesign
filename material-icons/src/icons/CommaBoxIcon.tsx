import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CommaBoxIcon: FC<IconInterface> = function CommaBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CommaBoxIcon ${className}`;
      return (
        <Icon alt="CommaBox" className={classNames} {...propsRest}>
          <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M15,13V7H9V13H12L10,17H13L15,13Z" />

        </Icon>
      );
    };
    CommaBoxIcon.displayName = 'CommaBoxIcon';
      