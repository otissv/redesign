import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaRBoxIcon: FC<IconInterface> = function AlphaRBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaRBoxIcon ${className}`;
      return (
        <Icon alt="AlphaRBox" className={classNames} {...propsRest}>
          <path d="M9,7V17H11V13H11.8L13,17H15L13.76,12.85C14.5,12.55 15,11.84 15,11V9A2,2 0 0,0 13,7H9M11,9H13V11H11V9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" />

        </Icon>
      );
    };
    AlphaRBoxIcon.displayName = 'AlphaRBoxIcon';
      