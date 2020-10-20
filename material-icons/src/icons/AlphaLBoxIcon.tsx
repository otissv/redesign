import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaLBoxIcon: FC<IconInterface> = function AlphaLBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaLBoxIcon ${className}`;
      return (
        <Icon alt="AlphaLBox" className={classNames} {...propsRest}>
          <path d="M9,7V17H15V15H11V7H9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" />

        </Icon>
      );
    };
    AlphaLBoxIcon.displayName = 'AlphaLBoxIcon';
      