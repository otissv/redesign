import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaJBoxOutlineIcon: FC<IconInterface> = function AlphaJBoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaJBoxOutlineIcon ${className}`;
      return (
        <Icon alt="AlphaJBoxOutline" className={classNames} {...propsRest}>
          <path d="M13,7H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V14H11V15H13V7M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5Z" />

        </Icon>
      );
    };
    AlphaJBoxOutlineIcon.displayName = 'AlphaJBoxOutlineIcon';
      