import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaTBoxIcon: FC<IconInterface> = function AlphaTBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaTBoxIcon ${className}`;
      return (
        <Icon alt="AlphaTBox" className={classNames} {...propsRest}>
          <path d="M9,7V9H11V17H13V9H15V7H9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" />

        </Icon>
      );
    };
    AlphaTBoxIcon.displayName = 'AlphaTBoxIcon';
      