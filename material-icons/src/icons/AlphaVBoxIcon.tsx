import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaVBoxIcon: FC<IconInterface> = function AlphaVBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaVBoxIcon ${className}`;
      return (
        <Icon alt="AlphaVBox" className={classNames} {...propsRest}>
          <path d="M9,7L11,17H13L15,7H13L12,12L11,7H9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" />

        </Icon>
      );
    };
    AlphaVBoxIcon.displayName = 'AlphaVBoxIcon';
      