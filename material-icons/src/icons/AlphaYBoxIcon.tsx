import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaYBoxIcon: FC<IconInterface> = function AlphaYBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaYBoxIcon ${className}`;
      return (
        <Icon alt="AlphaYBox" className={classNames} {...propsRest}>
          <path d="M9,7L11,13V17H13V13L15,7H13L12,10L11,7H9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" />

        </Icon>
      );
    };
    AlphaYBoxIcon.displayName = 'AlphaYBoxIcon';
      