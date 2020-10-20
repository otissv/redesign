import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaMBoxIcon: FC<IconInterface> = function AlphaMBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaMBoxIcon ${className}`;
      return (
        <Icon alt="AlphaMBox" className={classNames} {...propsRest}>
          <path d="M9,7A2,2 0 0,0 7,9V17H9V9H11V16H13V9H15V17H17V9A2,2 0 0,0 15,7H9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" />

        </Icon>
      );
    };
    AlphaMBoxIcon.displayName = 'AlphaMBoxIcon';
      