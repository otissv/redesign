import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaKBoxIcon: FC<IconInterface> = function AlphaKBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaKBoxIcon ${className}`;
      return (
        <Icon alt="AlphaKBox" className={classNames} {...propsRest}>
          <path d="M9,7V17H11V13.67L13,17H15L12,12L15,7H13L11,10.33V7H9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" />

        </Icon>
      );
    };
    AlphaKBoxIcon.displayName = 'AlphaKBoxIcon';
      