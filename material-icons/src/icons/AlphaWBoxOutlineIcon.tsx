import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaWBoxOutlineIcon: FC<IconInterface> = function AlphaWBoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaWBoxOutlineIcon ${className}`;
      return (
        <Icon alt="AlphaWBoxOutline" className={classNames} {...propsRest}>
          <path d="M9,17A2,2 0 0,1 7,15V7H9V15H11V8H13V15H15V7H17V15A2,2 0 0,1 15,17H9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5Z" />

        </Icon>
      );
    };
    AlphaWBoxOutlineIcon.displayName = 'AlphaWBoxOutlineIcon';
      