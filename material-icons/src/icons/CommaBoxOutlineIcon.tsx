import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CommaBoxOutlineIcon: FC<IconInterface> = function CommaBoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CommaBoxOutlineIcon ${className}`;
      return (
        <Icon alt="CommaBoxOutline" className={classNames} {...propsRest}>
          <path d="M10,17L12,13H9V7H15V13L13,17H10M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5Z" />

        </Icon>
      );
    };
    CommaBoxOutlineIcon.displayName = 'CommaBoxOutlineIcon';
      