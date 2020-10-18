import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaFBoxOutlineIcon: FC<IconInterface> = function AlphaFBoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaFBoxOutlineIcon ${className}`;
      return (
        <Icon alt="AlphaFBoxOutline" className={classNames} {...propsRest}>
          <path d="M9,7H15V9H11V11H14V13H11V17H9V7M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M5,5V19H19V5H5Z" />

        </Icon>
      );
    };
    AlphaFBoxOutlineIcon.displayName = 'AlphaFBoxOutlineIcon';
      