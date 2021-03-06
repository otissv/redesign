import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaMBoxOutlineIcon: FC<IconInterface> = function AlphaMBoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaMBoxOutlineIcon ${className}`;
      return (
        <Icon alt="AlphaMBoxOutline" className={classNames} {...propsRest}>
          <path d="M9,7H15A2,2 0 0,1 17,9V17H15V9H13V16H11V9H9V17H7V9A2,2 0 0,1 9,7M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5Z" />

        </Icon>
      );
    };
    AlphaMBoxOutlineIcon.displayName = 'AlphaMBoxOutlineIcon';
      