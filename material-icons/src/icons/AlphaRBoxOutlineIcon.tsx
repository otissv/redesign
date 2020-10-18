import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaRBoxOutlineIcon: FC<IconInterface> = function AlphaRBoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaRBoxOutlineIcon ${className}`;
      return (
        <Icon alt="AlphaRBoxOutline" className={classNames} {...propsRest}>
          <path d="M9,7H13A2,2 0 0,1 15,9V11C15,11.84 14.5,12.55 13.76,12.85L15,17H13L11.8,13H11V17H9V7M11,9V11H13V9H11M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5Z" />

        </Icon>
      );
    };
    AlphaRBoxOutlineIcon.displayName = 'AlphaRBoxOutlineIcon';
      