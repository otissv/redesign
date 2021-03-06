import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaIBoxOutlineIcon: FC<IconInterface> = function AlphaIBoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaIBoxOutlineIcon ${className}`;
      return (
        <Icon alt="AlphaIBoxOutline" className={classNames} {...propsRest}>
          <path d="M14,7V9H13V15H14V17H10V15H11V9H10V7H14M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5Z" />

        </Icon>
      );
    };
    AlphaIBoxOutlineIcon.displayName = 'AlphaIBoxOutlineIcon';
      