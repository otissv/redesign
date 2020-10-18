import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaTBoxOutlineIcon: FC<IconInterface> = function AlphaTBoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaTBoxOutlineIcon ${className}`;
      return (
        <Icon alt="AlphaTBoxOutline" className={classNames} {...propsRest}>
          <path d="M9,7H15V9H13V17H11V9H9V7M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5Z" />

        </Icon>
      );
    };
    AlphaTBoxOutlineIcon.displayName = 'AlphaTBoxOutlineIcon';
      