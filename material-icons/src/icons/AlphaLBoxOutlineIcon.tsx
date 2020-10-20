import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaLBoxOutlineIcon: FC<IconInterface> = function AlphaLBoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaLBoxOutlineIcon ${className}`;
      return (
        <Icon alt="AlphaLBoxOutline" className={classNames} {...propsRest}>
          <path d="M9,7H11V15H15V17H9V7M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5Z" />

        </Icon>
      );
    };
    AlphaLBoxOutlineIcon.displayName = 'AlphaLBoxOutlineIcon';
      