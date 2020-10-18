import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaVBoxOutlineIcon: FC<IconInterface> = function AlphaVBoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaVBoxOutlineIcon ${className}`;
      return (
        <Icon alt="AlphaVBoxOutline" className={classNames} {...propsRest}>
          <path d="M9,7H11L12,12L13,7H15L13,17H11L9,7M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5Z" />

        </Icon>
      );
    };
    AlphaVBoxOutlineIcon.displayName = 'AlphaVBoxOutlineIcon';
      