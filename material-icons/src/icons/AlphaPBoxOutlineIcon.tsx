import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaPBoxOutlineIcon: FC<IconInterface> = function AlphaPBoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaPBoxOutlineIcon ${className}`;
      return (
        <Icon alt="AlphaPBoxOutline" className={classNames} {...propsRest}>
          <path d="M9,7H13A2,2 0 0,1 15,9V11A2,2 0 0,1 13,13H11V17H9V7M11,9V11H13V9H11M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5Z" />

        </Icon>
      );
    };
    AlphaPBoxOutlineIcon.displayName = 'AlphaPBoxOutlineIcon';
      