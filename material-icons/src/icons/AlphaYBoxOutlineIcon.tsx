import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaYBoxOutlineIcon: FC<IconInterface> = function AlphaYBoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaYBoxOutlineIcon ${className}`;
      return (
        <Icon alt="AlphaYBoxOutline" className={classNames} {...propsRest}>
          <path d="M9,7H11L12,10L13,7H15L13,13V17H11V13L9,7M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5Z" />

        </Icon>
      );
    };
    AlphaYBoxOutlineIcon.displayName = 'AlphaYBoxOutlineIcon';
      