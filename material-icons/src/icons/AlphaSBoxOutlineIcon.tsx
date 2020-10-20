import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaSBoxOutlineIcon: FC<IconInterface> = function AlphaSBoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaSBoxOutlineIcon ${className}`;
      return (
        <Icon alt="AlphaSBoxOutline" className={classNames} {...propsRest}>
          <path d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5Z" />

        </Icon>
      );
    };
    AlphaSBoxOutlineIcon.displayName = 'AlphaSBoxOutlineIcon';
      